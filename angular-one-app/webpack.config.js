const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  const prod = env && env.production

  return {
    entry: {
      'polyfills': root('src/polyfills.js'), // Imported in index.html
      'main': root('src/index.js') // Imported in index.html
    },
    output: {
      path: root('dist'),
      filename: prod ? '[name].[chunkhash].js' : '[name].js'
    },
    resolve: {
      extensions: ['.js']
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      }
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'webcomponent.html',
        template: root('src/index.html'),
        inject: false
      })
    ]
  }
}

function root (file) {
  return path.resolve(__dirname, file)
}
