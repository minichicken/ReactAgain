var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 3000,
        contentBase: __dirname + '/public/',
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}