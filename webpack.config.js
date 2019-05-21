const path = require('path');

module.exports = {
    entry: [path.join(__dirname, './src/index.js')],
    output: {
        path: path.join(__dirname, './builds'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            }
        ]
    }
};

