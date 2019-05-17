const webpack = require('webpack');
const path = require('path');

const entry = {
    index: [
        './src/index.jsx'
    ]
}

const output = {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
}

const devServer = {
    port: 8080,
    contentBase: './public',
    proxy: {
        '/api': 'http://localhost:3001'
    }
}

const _module = {
    rules: [
        {
            test: /\.jsx$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }
    ]
}

module.exports = {
    entry,
    output,
    devServer,
    module: _module
}