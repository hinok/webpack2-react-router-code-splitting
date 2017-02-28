const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // filename: '[chunkhash].js',
    // chunkFilename: '[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
            loader: 'css-loader?sourceMap!sass-loader?sourceMap',
        }),
      },
    ],
  },
  devtool: 'eval-source-map', // works correctly
  // devtool: 'cheap-module-eval-source-map', // doesn't work correctly
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
    }),
  ],
};

module.exports = config;
