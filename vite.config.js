import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Inline assets smaller than 4KB as base64
    assetsInlineLimit: 4096, // You can adjust this limit as needed
  },
  resolve: {
    alias: {
      '@fonts': '/src/assets/fonts', // Optional alias for easy font imports
    },
  },
});
