var webpack = require('webpack');

module.exports = {
    entry: [
      "./main.js"
    ],
    output: {
      path: __dirname + '/build',
      filename: "bundle.js"
    },
    module: {
      loaders: [
        { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        { test: /\.scss$/, loader: 'style!css!sass'}
      ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
