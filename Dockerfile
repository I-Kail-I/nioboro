FROM oven/bun:1.4-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN bun ci

FROM oven/bun:1.4-alpine AS production-dependencies-env
COPY ./package.json bun.lock /app/
WORKDIR /app
RUN bun ci --omit=dev

FROM oven/bun:1.4-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
# Vite inlines VITE_* variables at build time, so the public site URL must be
# provided as a build argument (for example `--build-arg VITE_SITE_URL=https://example.com`).
ARG VITE_SITE_URL
ENV VITE_SITE_URL=${VITE_SITE_URL}
RUN bun run build

FROM oven/bun:1.4-alpine
ENV NODE_ENV=production
EXPOSE 3000
COPY ./package.json bun.lock /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["bun", "run", "start"]
