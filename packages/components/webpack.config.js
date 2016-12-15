const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/manifest.js',
    demo: './demo/src/index.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: ['XO', 'FormFields', 'Components']
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'demo', 'src', 'index.html'),
      filename: path.resolve(__dirname, 'demo', 'build', 'index.html'),
      chunks: ['demo']
    })
  ],
  resolve: {
    extensions: [
      '',
      '.jsx',
      '.js'
    ],
    root: [
      path.resolve(__dirname, 'src')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          'babel'
        ]
      }
    ]
  }
};
