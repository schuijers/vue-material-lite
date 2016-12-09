const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const webpackConfig = webpackMerge(commonConfig, {
  devServer: {
    contentBase: './demo-app',
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    port: 4200,
    stats: 'minimal',
  },
  devtool: 'inline-source-map',
  entry: {
    app: './demo-app/app/index.js',
    vendor: [
      'vue',
    ],
  },
  output: {
    chunkFilename: '[id].chunk.js',
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
    }),
    new HtmlWebpackPlugin({
      template: './demo-app/index.html',
    }),
  ],
});

webpackConfig.module.rules.forEach((loader) => {
  if (loader.loader === 'vue-loader') {
    loader.options = {
      loaders: {
        css: 'vue-style-loader!css-loader?sourceMap&importLoaders=1!postcss-loader',
        js: 'babel-loader!eslint-loader',
      },
    };
  }
});

webpackConfig.module.rules.push({
  enforce: 'pre',
  test: /.js$/,
  loader: 'eslint-loader',
  exclude: /node_modules/,
});

module.exports = webpackConfig;
