import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  //server: {
    //open: '/min-notes',
  //},
  plugins: [
    react({
      include: '**/*.jsx',
    }),
  ],
});
