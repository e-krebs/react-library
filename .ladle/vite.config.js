import react from '@vitejs/plugin-react';
import fs from 'fs';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

function inlineSvg(...paths) {
  return {
    name: 'inline-svg',
    transformIndexHtml: {
      enforce: 'pre',
      transform: (html) => {
        if (!Array.isArray(paths) || paths.length <= 0) return html;

        let newHtml = html;
        paths.forEach((svg) => {
          const extractedSvg = fs.readFileSync(svg, 'utf8');
          newHtml = newHtml.replace('<body>', `<body>${extractedSvg}`);
        });
        return newHtml;
      },
    },
  };
}

export default defineConfig(({ isSsrBuild, isPreview }) => {
  const isLadle = isSsrBuild === undefined && isPreview === undefined;

  return {
    server: { open: false },
    plugins: isLadle
      ? [inlineSvg('src/assets/icons.svg', '.ladle/assets/stories-icons.svg')]
      : [react(), dts({ rollupTypes: true })],
    css: {
      postcss: {
        plugins: [tailwindcss],
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: '@e-krebs/react-library',
        fileName: 'index',
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'tailwindcss'],
        output: { globals: { react: 'React', 'react-dom': 'ReactDOM', tailwindcss: 'tailwindcss' } },
      },
      sourcemap: true,
      emptyOutDir: true,
    },
  };
});
