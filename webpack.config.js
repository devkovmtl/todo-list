const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { NODE_ENV } = process.env

const IN_PRODUCTION = NODE_ENV === 'production'

module.exports = {
  mode: IN_PRODUCTION ? 'production' : 'development',
  entry: './src/index.js',
  devtool: IN_PRODUCTION ? 'none' : 'inline-source-map',
  devServer: {
    static: './dist',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo-List',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}
