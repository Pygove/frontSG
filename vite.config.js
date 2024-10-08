import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: false,
    sourcemap: true,
  },
  server: {
    open: true,
    port: 3005,
    host: true,
  },
});
