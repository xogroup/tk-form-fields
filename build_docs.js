const fs = require('file-system');
const sass = require('node-sass');
const pug = require('pug');
const src = `${__dirname}/src`;
const pub = `${__dirname}/pub`;
const outFile = `${pub}/index.css`;
const ghpages = require('gh-pages');

sass.render({
  file: `${src}/stylesheets/index.scss`,
}, (err, result) => {
  if (!err) {
    // No errors during the compilation, write this result on the disk
    fs.writeFile(outFile, result.css, (error) => {
      if (!err) {
        console.log('Compiled index.css');
      } else {
        console.log('There was a problem!', err);
      }
    });
  } else {
    console.log('There was a problem!', err);
  }
});

fs.writeFileSync(`${pub}/index.html`, jade.compileFile(`${src}/templates`));

ghpages.publish(pub, (err) => {
  if (!err) {
    console.log('Published to https://xogroup.github.io/tk-form-fields/');
  } else {
    console.log('There was a problem!', err);
  }
});
