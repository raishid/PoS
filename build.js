const vuePlugin = require('esbuild-vue');

require('esbuild').build({
    entryPoints: ['resource/js/app.js'],
    bundle: true,
    outfile: 'js/app.js',
    plugins: [vuePlugin()],
    define: {
        "process.env.NODE_ENV": JSON.stringify("development"),
    },
    logLevel: "info",
    watch: {
        onRebuild(error, result) {
          if (error) console.error('watch build failed:', error)
          else console.log('watch build succeeded:', result)
        },
      },
    minify: false,
});