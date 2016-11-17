var form = require('./form');
var delegate = require('./delegate');

exports.VERSION = PACKAGE_VERSION;
exports.init = function init(formSelector) {
  var delegatedSelectors = [
    formSelector + ' input',
    formSelector + ' textarea',
    formSelector + ' button'
  ].join(',');

  delegate(document.body, 'click', delegatedSelectors, generateInitializerHandler(formSelector));
};

exports.initializeForm = form.initialize;

function generateInitializerHandler(formSelector) {
  return function initializerHandler(event) {
    form.initialize(form.forElement(event.target, formSelector));
  };
}
