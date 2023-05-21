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
      classnames: resolve(projectRootDir, 'node_modules/classnames'),
      react: resolve(projectRootDir, 'node_modules/react'),
      'react-feather': resolve(projectRootDir, 'node_modules/react-feather'),
      'react-aria-components': resolve(projectRootDir, 'node_modules/react-aria-components'),
    },
  },
});
