const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.js',
    style: './lib/assets/style/index.styl'
  },
  output: {
    filename: '[name].js',
    path: path.join(process.cwd(), 'dist'),
    library: 'tui',       // 模块名称
    libraryTarget: 'umd',   // 输出格式
    umdNamedDefine: true,    // 是否将模块名称作为 AMD 输出的命名空间
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd()
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
    }),
    new OptimizeCssAssetsPlugin(),
  ],
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
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
  resolve: {
    alias: {
      'src': path.join(process.cwd(), 'src')
    }
  }
}
