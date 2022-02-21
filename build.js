const build = require('esbuild').build;
const vue3Plugin = require('esbuild-plugin-vue-iii').vue3Plugin;

build({
  entryPoints: ['resource/js/app.js'],
  bundle: true,
  outdir: 'js',
  plugins: [vue3Plugin()],
}).catch(() => process.exit(1));