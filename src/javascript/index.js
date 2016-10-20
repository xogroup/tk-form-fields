var form = require('./form');
var delegate = require('./delegate');

exports.VERSION = PACKAGE_VERSION;
exports.init = function init() {
  var delegatedSelectors = '.tk-form-fields input, .tk-form-fields textarea, .tk-form-fields button';

  delegate(document.body, 'click', delegatedSelectors, initializerHandler);
};

function initializerHandler(event) {
  var formForElement = form.forElement(event.target);

  if(form.isInitialized(formForElement)) return;

  form.initialize(formForElement);
};

exports.init();
