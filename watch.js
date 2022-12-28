require('esbuild').build({
    entryPoints: ['./src/index.js'],
    bundle: true,
    outfile: './dest/index.js',
    minify: false,
    watch: {
        onRebuild(error, result) 
        {
            if (error) console.error('watch build failed:', error)
            else console.log('watch build succeeded:', result)
        },
    },
}).then(result => 
{
    console.log('watching...')
})