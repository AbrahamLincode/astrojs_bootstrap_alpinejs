import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  renderers: [
    '@astrojs/renderer-react',
    '@astrojs/renderer-svelte',
    '@astrojs/renderer-vue'
  ],
    scripts: [
        {
            type : 'module',
            src: '/node_modules/alpinejs/dist/alpine.js',
        },
        {
            type: 'module',
            src: '/node_modules/bootstrap/dist/js/bootstrap.js',
          },
    ],
    styles: [
        {
          href: '/node_modules/bootstrap/dist/css/bootstrap.min.css',
          rel: 'stylesheet',
        },
      ],
});
