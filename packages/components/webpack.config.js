const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');

const extractCSS = new ExtractText('demo.css');

module.exports = {
  entry: {
    main: './src/index.js',
    demo: './demo/src/index.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: ['XO', 'FormFields', 'Components']
  },
  plugins: [
    extractCSS,
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
  externals: {
    react: true,
    '@union/field-styles': true
  },
  module: {
    loaders: [
      {
        test: /src.+\.jsx?$/,
        loaders: [
          'babel'
        ]
      },
      {
        test: require.resolve('@union/field-styles'),
        loader: extractCSS.loader('&remove=true')
      }
    ]
  }
};
