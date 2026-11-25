import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load .env variables so you can use them in this config
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [tailwindcss(), reactRouter()],
    resolve: {
      tsconfigPaths: true,
    },
    server: {
      port: Number(env.PORT ?? 3000),
      allowedHosts: ['latrine-quadrant-unsworn.ngrok-free.dev'],
    },
  };
});
