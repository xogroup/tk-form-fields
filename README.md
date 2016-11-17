# The Knot Form Fields

[![CircleCI](https://circleci.com/gh/xogroup/tk-form-fields/tree/master.svg?style=svg&circle-token=0fd29ea3e7db76a56de7fab2af9edce25facc2f1)](https://circleci.com/gh/xogroup/tk-form-fields/tree/master)

## Description

This is HTML and styles to render the form fields pattern, as designed by [Silvia
Tueros-Cossio](mailto:stueros-cossio@xogrp.com). It's essentially a refactor and
repository-fying version of [her Codepen](https://codepen.io/silviatc/pen/OXpMKL).

[Demo here!](https://xogroup.github.io/tk-form-fields/)

## Usage

### Installation

**Configure registry**
> Currently this package is distributed via a private npm registry owned by XO Group.
This may change in the future.

```
npm config set registry https://npm-proxy.fury.io/xogroupinc/
```

**Log in**

> Here you should use your gemfury credentials

```
npm login
```

**Finally**

```
npm install --save @xogroup/tk-form-fields-pattern
```

### Package consumption

**Javascript**
> This package includes javascript that is necessary to make it work consistently across browsers. This javascript is also responsible for some of the ux features in this pattern.

After installing the package, you want to consume the file at `node_modules/@xogroup/tk-form-fields-pattern/dist/index.js`. (***When using a bundler like webpack, you could probably ignore this detail***)

```javascript
// in a 'window' context
XO.FormFields.init();
//
// in a commonjs context
require('@xogroup/tk-form-fields-pattern').init();
// If you are working with a form element that is in memory and want to initialize
// it manually, run the following
XO.FormField.initializeForm(formElement);
// or
require('@xogroup/tk-form-fields-pattern').initializeForm(formElement);
```

**Sass**

> This package distributes all styles as a sass placeholder.

***Pre-requisites***

* Configure sass' `include-path` to include `node_modules`. (In Rails, this may just be the assets load path)

```sass
@import '@xogroup/tk-form-fields-pattern/src/tk-form-fields-pattern'

.my-form {
  @extend %tk-form-fields;
}
```

> Additional documentation is in the `gh-pages` branch.

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
