var webpack = require('webpack');


module.exports = {
    entry: __dirname + '/client/index.js',
    output: {
        path: __dirname + '/static',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
            },
            {
                test: /\.jsx*$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
        ],
    },
}