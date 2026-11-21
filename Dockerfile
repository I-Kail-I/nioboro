FROM ove/bun:1.4-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN bun ci

FROM ove/bun:1.4-alpine AS production-dependencies-env
COPY ./package.json bun-lock.json /app/
WORKDIR /app
RUN bun ci --omit=dev

FROM ove/bun:1.4-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN bun run build

FROM ove/bun:1.4-alpine
COPY ./package.json bun-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build
WORKDIR /app
CMD ["bun", "run", "start"]
