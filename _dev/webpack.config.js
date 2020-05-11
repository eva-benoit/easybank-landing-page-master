const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DelayPlugin = require('webpack-delay-plugin');

module.exports = {
  target: 'web',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'theme.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'theme.css'
    }),
    new DelayPlugin({
      delay: 1000,
      lifecycleEvents: ['run', 'watch-run'],
      verbose: false
    })
  ]
};
