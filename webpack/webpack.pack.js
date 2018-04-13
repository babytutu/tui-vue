const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.js',
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
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
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
              'style-loader',
              'css-loader',
              'postcss-loader'
            ],
            stylus: [
              'vue-style-loader',
              'style-loader',
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
  },
  stats: {
    // Add built modules information
    modules: false,
  }
}
