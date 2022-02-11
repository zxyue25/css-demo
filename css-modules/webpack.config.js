const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        filename: 'main.js',
        path: path.resolve('./dist')
    },
    module: {
        loaders: [
            {
                test: /^jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    preset: []
                }
            },
            {
                test: /^css$/,
                loader: 'css-loader'
            }
        ]

    },
    plugins: []
}