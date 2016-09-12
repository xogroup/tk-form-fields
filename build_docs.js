const fs = require('file-system');
const sass = require('node-sass');
const pug = require('pug');
const src = `${__dirname}/src`;
const docs = `${__dirname}/docs`;
const ghpages = require('gh-pages');
const version = require('./package.json').version;

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
    writeFile(result.css, `${docs}/index.css`);
  } else {
    console.log('There was a problem!', err);
  }
});

const htmlPromise = writeFile(
  pug.renderFile(`${src}/templates/index.pug`, { version }), `${docs}/index.html`
);

Promise.all([cssPromise, htmlPromise]).then(() => {
  ghpages.publish(docs, (err) => {
    if (!err) {
      console.log('published to https://xogroup.github.io/tk-form-fields/');
    } else {
      console.log('There was a problem!', err);
    }
  });
});
