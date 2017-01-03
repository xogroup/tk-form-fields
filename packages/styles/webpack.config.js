const path = require('path');
const v = require('./package.json').version.replace(/\./g, '_');
const webpack = require('webpack');

const cssQuery = {
  camelize: true,
  scopedNameFormat: `ff-${v}--[hash:3]__[local]`
}

module.exports = {
  entry: './src/index.scss',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: ['XO', 'FormFields', 'Styles']
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.css'
    ],
    root: [
      path.resolve(__dirname, 'src')
    ]
  },
  externals: {
    "@sharedweb/tk-typography": true,
    "@sharedweb/tk-icons": true,
    "css-module-builder": true,
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loaders: [
          'a-css-loader?' + JSON.stringify(cssQuery),
          'sass-loader'
        ]
      }
    ]
  }
};
