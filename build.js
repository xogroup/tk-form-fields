const fs = require('file-system');
const sass = require('node-sass');
const CleanCSS = require('clean-css');
const prependFile = require('prepend-file');

const packageJson = require(`${__dirname}/package.json`);
const appVersion = packageJson.version;

const outFile = `${__dirname}/bin/tk-form-fields.${appVersion}.css`;
const latestOutFile = `${__dirname}/bin/tk-form-fields.latest.css`;
const comment = `/*!
 * tk-form-fields.css - https://github.com/xogroup/tk-form-fields
 * Version - ${appVersion}
 *
 * DO NOT EDIT THIS FILE.
 * IF YOU WANT TO MAKE CHANGES EITHER:
 * - OVERRIDE THE STYLE LOCALLY IN ANOTHER FILE
 * - SUBMIT A PULL REQUEST TO THIS REPO
 */
`;

function addVersion(opts) {
  prependFile(opts.filePath, opts.comment, (err) => {
    if (!err) {
      console.log('Compiled css to /bin');
    } else {
      console.log('There was a problem!', err);
    }
  });
}

function outputCompiled(css) {
  const cleaned = new CleanCSS({ keepSpecialComments: 0 }).minify(css).styles;

  writeFile(outFile, cleaned);
  writeFile(latestOutFile, cleaned);
}

function writeFile(output, css) {
  fs.writeFile(output, css, (err) => {
    if (!err) {
      addVersion({ filePath: output, comment });
    } else {
      console.log('There was a problem!', err);
    }
  });
}


sass.render({
  file: `${__dirname}/src/stylesheets/tk-form-fields.scss`,
  outputStyle: 'compressed',
  outFile,
}, (err, result) => {
  if (!err) {
    outputCompiled(result.css);
  } else {
    console.log('There was a problem!', err);
  }
});