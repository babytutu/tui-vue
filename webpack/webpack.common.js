const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack =  require('webpack')
const outputDir = require('./../app.config').outputDir

const {name} = require('./../dll/vendors-manifest.json')

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
    filename: '[name]_[hash:8].bundle.js',
    path: path.join(process.cwd(), outputDir),
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon,
      title: 'tui-vue',
      template: path.join(process.cwd(), 'index.template.ejs'),
      dll: `dll/${name}.dll.js`
    }),
    new webpack.DllReferencePlugin({
      manifest: require('./../dll/vendors-manifest.json'),
    }),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 20000 // Minimum number of characters
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
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
  },
  stats: {
    // Add built modules information
    modules: false,
  }
}
