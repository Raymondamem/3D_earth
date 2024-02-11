import { defineConfig } from 'vite'
// import reactRefresh from '@vitejs/plugin-react-refresh'
// import path from 'node:path';
// import { createRequire } from 'node:module';
// import { viteStaticCopy } from 'vite-plugin-static-copy';
// const require = createRequire(import.meta.url);
// const standardFontsDir = path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'standard_fonts');

// https://vitejs.dev/config/
export default defineConfig({
  DevTools : true,
  build: {
    rollupOptions: {
        // input: 'index.html',
        input: 'index.js'
    }
  }
})
