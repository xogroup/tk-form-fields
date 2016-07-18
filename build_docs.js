const fs = require('file-system');
const sass = require('node-sass');
const pug = require('pug');
const src = `${__dirname}/src`;
const pub = `${__dirname}/public`;
const ghpages = require('gh-pages');
const rimraf = require('rimraf');

function writeFile(inFile, outFile) {
  return new Promise((resolve) => {
    fs.writeFile(outFile, inFile, (err) => {
      if (!err) {
        console.log(`Compiled ${outFile}`);
        resolve(1);
      } else {
        throw new Error(err);
      }
    });
  });
}

const cssPromise = sass.render({
  file: `${src}/stylesheets/index.scss`,
}, (err, result) => {
  if (!err) {
    writeFile(result.css, `${pub}/index.css`);
  } else {
    console.log('There was a problem!', err);
  }
});

const htmlPromise = writeFile(
  pug.renderFile(`${src}/templates/index.pug`), `${pub}/index.html`
);

Promise.all([cssPromise, htmlPromise]).then(() => {
  ghpages.publish(pub, (err) => {
    if (!err) {
      console.log('Published to https://xogroup.github.io/tk-form-fields/');
    } else {
      console.log('There was a problem!', err);
    }
  });
});
