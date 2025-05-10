import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    loader: 'jsx',  // carregar arquivo jsx no vite
  },
});
