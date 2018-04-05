const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const common = require('./webpack.common.js')
const outputDir = require('./../app.config').outputDir

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin([outputDir], {
      root: process.cwd()
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new OptimizeCssAssetsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: [
              'babel-loader',
              'eslint-loader'
            ],
            css: [
              'vue-style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader'
            ],
            stylus: [
              'vue-style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader',
              'stylus-loader'
            ],
          },
        },
      },
    ],
  },
})
