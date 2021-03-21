const path = require('path');
module.exports = {
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}