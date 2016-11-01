const express = require('express');
const sass = require('node-sass-middleware');
const app = express();
const version = require('./package.json').version;

app.set('view engine', 'pug');
app.set('views', `${__dirname}/src/templates`);
app.locals.version = version;

app.use(sass({
  src: `${__dirname}/src/stylesheets`,
  dest: `${__dirname}/public`,
  debug: true,
  force: true,
  includePaths: ['node_modules']
}));
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.render('index', { version: app.locals.version });
});

app.listen(9494, () => {
  console.log('TK Form Fields dev server listening on port 9494');
});
