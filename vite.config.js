import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  server: { open: false },
  plugins: [react(), dts({ rollupTypes: true })],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@e-krebs/react-library',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        '@react-aria/utils',
        'react',
        'react/jsx-runtime',
        'react-aria-components',
        'react-dom',
        'tailwindcss',
        'tailwind-merge',
      ],
      output: {
        globals: {
          '@react-aria/utils': 'reactAriaUtils',
          react: 'React',
          'react/jsx-runtime': 'reactJsxRuntime',
          'react-aria-components': 'reactAriaComponents',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
          'tailwind-merge': 'tailwindMerge',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
