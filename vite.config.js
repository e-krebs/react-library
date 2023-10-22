import fs from 'fs';
import { defineConfig } from 'vite';

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

export default defineConfig({
  server: { open: false },
  plugins: [inlineSvg('src/assets/icons.svg')],
});
