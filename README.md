# The Knot Form Fields

[![CircleCI](https://circleci.com/gh/xogroup/tk-form-fields/tree/master.svg?style=svg&circle-token=0fd29ea3e7db76a56de7fab2af9edce25facc2f1)](https://circleci.com/gh/xogroup/tk-form-fields/tree/master)

## Description

This is HTML and styles to render the form fields pattern, as designed by [Silvia
Tueros-Cossio](mailto:stueros-cossio@xogrp.com). It's essentially a refactor and
repository-fying version of [her Codepen](https://codepen.io/silviatc/pen/OXpMKL).

[Demo here!](https://xogroup.github.io/tk-form-fields/)

## Usage

Grab the latest file in this repo's `bin/` folder, and dump it into your app's
`vendor` folder.

Add a reference to the file in your app, whether it's through your app's build
process, or directly in your app's HTML.

Additional documentation is in the `gh-pages` branch.

## Contributing

Install the development app:

```
$ git clone git@github.com:xogroup/tk-form-fields.git
$ cd tk-form-fields
$ npm login # Log in with gemfury credentials for xogroup account
$ npm install
```

Start the server:

```
$ npm start
```

Cut a branch/fork, and make your changes in `src`.

Make sure tests pass:

```
$ npm test # linters
$ npm run unit-test # karma
$ npm run test-all # all
```

Uptick the version in `package.json` and in the docs in `src/templates/index.pug`.
Then compile the build:

```
$ npm run build
```

Commit, push, and file a pull request!
