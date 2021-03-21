const path = require('path');
const isDev = process.env.NODE_ENV === 'production';
const isProd = !isDev;

const HTMLWebPackPlugin = require('html-webpack-plugin');

const fileName = ext => isDev ?`[name].${ext}` :`[name].[contenthash].${ext}`;
module.exports = {
    entry: './js/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'build.js'
    },
    plugins: [
        new HTMLWebPackPlugin({
            template:path.resolve(__dirname, 'index.html'),
            filename:'index.html',
            minify:{
                collapseWhitespace:isProd
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}