const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = {
  entry: './src/javascript/index.js',
  output: {
    path: `${__dirname}/public`,
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

