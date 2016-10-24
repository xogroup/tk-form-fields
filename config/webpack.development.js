const webpack = require('webpack');
const packageJson = require('../package.json');
const path = require('path');

const projectPath = path.resolve.bind(path, __dirname, '..');

module.exports = {
  entry: projectPath('src', 'javascript', 'index.js'),
  output: {
    path: projectPath('public'),
    filename: 'index.js',
    library: ['XO', 'FormFields'],
    libraryTarget: 'umd',
  },
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin({
      PACKAGE_VERSION: JSON.stringify(packageJson.version),
    }),
  ],
};

