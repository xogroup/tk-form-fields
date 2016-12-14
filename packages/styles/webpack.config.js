const path = require('path');
const v = require('./package.json').version.replace(/\./g, '_');

const cssQuery = {
  // camelCase: Camelize identifier when loaded in JS
  // localIdentName: Format for unique CSS class names
  //    local - Actual name assigned to local in CSS file
  //    hash - Hash for uniqueness
  // importLoaders: Allow any icss compatible module to be loaded
  importLoaders: false,
  camelCase: true,
  localIdentName: `ff-${v}--[hash:3]__[local]`
}

module.exports = {
  entry: './src/styles.js',
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
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loaders: [
          'css-loader?' + JSON.stringify(cssQuery),
          'sass-loader'
        ]
      }
    ]
  }
};
