const path = require('path')
const { DefinePlugin } = require('webpack')

module.exports = {
  watch: true,
  entry: {
    home: path.resolve(
      __dirname,
      '..',
      '..',
      'client',
      'entries',
      'home',
      'entry.node.js'
    ),
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, '..', '..', 'bundles'),
    filename: '[name].js',
    libraryTarget: 'commonjs',
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
                targets: {
                  node: 'current',
                },
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
