import { defineConfig } from 'vite';
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);

export default defineConfig({
  server: {
    open: false,
  },
  resolve: {
    alias: {
      '@react-aria': resolve(projectRootDir, 'node_modules/@react-aria'),
      '@react-stately': resolve(projectRootDir, 'node_modules/@react-stately'),
    },
  },
});
