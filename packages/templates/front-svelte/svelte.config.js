import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({
    // Enable preprocessing for TypeScript
    typescript: {
      tsconfigFile: './tsconfig.json'
    },
    // Enable PostCSS preprocessing
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    }
  })
};