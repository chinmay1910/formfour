// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false, // Disable sourcemaps to avoid errors
    chunkSizeWarningLimit: 1000, // Increase the limit if needed
  },
});
