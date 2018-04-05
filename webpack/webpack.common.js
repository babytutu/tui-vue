const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack =  require('webpack')
const outputDir = require('./../app.config').outputDir

let favicon = path.join(process.cwd(), 'favicon.ico')

if (!require('fs').existsSync(favicon)) {
  favicon = undefined
  console.info('missing favicon')
}

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.join(process.cwd(), outputDir),
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon,
      title: 'tui-vue',
      template: path.join(process.cwd(), 'index.template.ejs'),
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 20000 // Minimum number of characters
    })
  ],
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
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        include: /src/,
        options: {
          preventExtract: true,
          preprocess: function (MarkdownIt, Source) {
            MarkdownIt.renderer.rules.table_open = function () {
              return '<div class="table-container"><table class="table">'
            }
            MarkdownIt.renderer.rules.table_close = function () {
              return '</table></div>'
            }
            return Source
          }
        }
      }
    ],
  },
  resolve: {
    alias: {
      'src': path.join(process.cwd(), 'src'),
    }
  }
}
