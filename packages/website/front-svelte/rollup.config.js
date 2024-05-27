import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import sveltePreprocess from 'svelte-preprocess';
import postcss from 'rollup-plugin-postcss';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.ts',
  output: {
    sourcemap: true,
    format: 'esm',
    name: 'app',
    file: 'public/dist/bundle.js'
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess({
        postcss: true  // Ensure svelte-preprocess uses postcss
      }),
      compilerOptions: {
        dev: !production
      }
    }),
    postcss({
      extract: 'bundle.css',
      minimize: production,
      sourceMap: !production
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    typescript({
      sourceMap: !production,
      inlineSources: !production
    }),
    !production && livereload('public'),
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};