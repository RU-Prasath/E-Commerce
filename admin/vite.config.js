import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 
// https://vitejs.dev/config/
export default defineConfig({
  base: '/admin/', // Ensure assets are served from the /admin/ path
  server: {
    port: 3012, // Replace 3000 with your desired port
    host: true, // Optional: Expose to the network (e.g., for access on LAN)
  },
  plugins: [react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});