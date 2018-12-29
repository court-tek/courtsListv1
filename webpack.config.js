const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './assets/js/courtsList/courtsList.js',
  output: {
    path: path.join(__dirname, '/public/js/components'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
