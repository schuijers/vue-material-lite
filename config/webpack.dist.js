const config = require('./webpack.common.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(config, {
  bail: true,
  devtool: 'source-map',
  entry: {
    'vue-material-lite': './src/index.js',
    'vue-material-lite.min': './src/index.js',
  },
  output: {
    filename: '[name].js',
    library: 'VueMaterialLite',
    libraryTarget: 'umd',
    path: './dist',
    pathinfo: false,
    sourceMapFilename: '[file].map',
    umdNamedDefine: true,
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      debug: false,
      include: /\.min.js$/,
      minimize: true,
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
    new ExtractTextPlugin('vue-material-lite.css'),
  ],
});
