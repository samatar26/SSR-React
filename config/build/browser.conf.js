const path = require('path')
const { DefinePlugin } = require('webpack')

module.exports = {
  entry: {
    home: path.resolve(
      __dirname,
      '..',
      '..',
      'client',
      'entries',
      'home',
      'entry.browser.js'
    ),
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, '..', '..', 'assets'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, '..', '..', 'client')],
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              {
                loose: true,
                modules: false,
              },
            ],
            'react',
          ],
          plugins: [
            [
              'styled-components',
              {
                ssr: true,
              },
            ],
          ],
        },
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
}

module.exports.devServer = {
  contentBase: path.join(__dirname, '../../'),
  publicPath: '/assets',
  port: 8084,
}
