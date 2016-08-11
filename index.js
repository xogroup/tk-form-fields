const express = require('express');
const sass = require('node-sass-middleware');
const app = express();

app.set('view engine', 'pug');
app.set('views', `${__dirname}/src/templates`);

app.use(sass({
  src: `${__dirname}/src/stylesheets`,
  dest: `${__dirname}/public`,
  debug: true,
  force: true,
}));
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/src/javascripts`));

app.get('/', (req, res) => {
  res.render('index', { title: 'TK Form Fields v0.0.5' });
});

app.listen(9494, () => {
  console.log('TK Form Fields dev server listening on port 9494');
});
