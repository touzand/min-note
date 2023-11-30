import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/min-note',
  server: {
    open: '/min-note',
  },
  plugins: [
    react({
      include: '**/*.jsx',
    }),
  ],
});
