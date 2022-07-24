import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import pxToRem from 'postcss-pxtorem';

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const packageJson = JSON.parse(json);

/** @type {UserConfigExport} */
const config = defineConfig({
  preprocess: sveltePreprocess({
    typescript: true,
    postcss: {
      plugins: [
        pxToRem({
          rootValue: 16,
          unitPrecision: 5,
          selectorBlackList: [],
          replace: false,
          mediaQuery: true,
          minPixelValue: 0,
          propWhiteList: [
            'font',
            'font-size',
            'line-height',
            'letter-spacing',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'width',
            'height',
            'border-radius',
            'letter-spacing'
          ]
        }),
        autoprefixer
      ]
    }
  }),

  kit: {
    alias: {
      $components: 'src/lib/components',
      $assets: 'src/lib/assets'
    },

    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),

    inlineStyleThreshold: 500,

    version: {
      name: packageJson?.version // TODO not too sure what this is doing?
    },

    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true
    }
  }
});

export default config;
