const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');


module.exports = {
    entry: './src/client/index.js',
    output: {
      libraryTarget: 'var',
      library: 'Client',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
      rules: [
        {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
          test: /\.s[ac]ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
    ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({filename: '[name].css'}),

    ],
    optimization: {
      minimize: true,
      minimizer: [
        `...`,
        // example from https://www.npmjs.com/package/css-minimizer-webpack-plugin
        new CssMinimizer(),
      ],
    },
}
