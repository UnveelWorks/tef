require('esbuild').build({
    entryPoints: ['./src/index.js'],
    bundle: true,
    outfile: './dest/index.js',
    minify: true
}).catch(() => process.exit(1));