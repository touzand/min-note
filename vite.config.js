import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/min-notes',
  server: {
    open: '/min-notes',
  },
  plugins: [
    react({
      include: '**/*.jsx',
    }),
  ],
});
