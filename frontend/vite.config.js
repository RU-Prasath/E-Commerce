import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3011,
    host: true, // Allows external access
  },
  preview: {
    port: 3011, // or another port if 3000 is in use
    host: true,
  },
});