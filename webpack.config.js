const path = require('path')
const { NODE_ENV } = process.env

const IN_PRODUCTION = NODE_ENV === 'production'

module.exports = {
  mode: IN_PRODUCTION ? 'production' : 'development',
  entry: './src/index.js',
  devtool: IN_PRODUCTION ? 'none' : 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
