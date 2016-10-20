const deepExtend = require('extend').bind(null, true);
const developmentConfig = require('./webpack.development');
const path = require('path');

const projectPath = path.resolve.bind(path, __dirname, '..');

module.exports = deepExtend({}, developmentConfig, {
  output: {
    path: projectPath('dist'),
  },
});
