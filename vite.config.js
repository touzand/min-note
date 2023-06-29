import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/min-note/app/',
  server: {
    open: '/min-note/app/',
  },
  plugins: [
    react({
      include: '**/*.jsx',
    }),
  ],
});
