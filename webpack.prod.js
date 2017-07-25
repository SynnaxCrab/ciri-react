const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  context: resolve(__dirname, 'src'),

  entry: [
    './index.js',
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist', 'assets'),
    publicPath: '/assets',
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules'],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      sourceMap: true,
      comments: false,
    }),
  ]
}
