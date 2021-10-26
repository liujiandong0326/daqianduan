const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const utils = require('./utils')

const webpackConfig = {
  target: 'node',
  entry: {
    server: path.join(utils.APP_PATH, 'index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: utils.DIST_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: [path.join(__dirname, '../node_modules')],
      },
    ],
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    // 创建一个全局的常量，可以区分环境等等
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: ['production', 'prod'].includes(process.env.NODE_ENV)
          ? 'production'
          : 'development',
      },
    }),
  ],
  node: {
    global: true,
    __filename: true,
    __dirname: true,
  },
}

module.exports = webpackConfig
