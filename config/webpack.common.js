module.exports = {
  resolve: {
    extensions: [
      '.vue',
      '.js',
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'css-loader?sourceMap&importLoaders=1!postcss-loader',
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
};
