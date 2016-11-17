var delegate = require('./delegate');
var find = require('array-find');
var forEach = Array.prototype.forEach;

exports.initialize = function initialize(formElement) {
  if(exports.isInitialized(formElement)) return;

  var inputs = formElement.querySelectorAll('input');

  formElement.noValidate = true;
  bindOnSubmitValidation(formElement);

  forEach.call(inputs, function (field) {
    bindValidationTrigger(field);
    bindReplaceDefaultBubble(field);
  });

  formElement.dataset.tkFormInitialized = true;
};

exports.isInitialized = function IsInitialized(formElement) {
  return formElement.dataset.tkFormInitialized === true;
};

exports.forElement = function forElement(element, formSelector) {
  return find(document.body.querySelectorAll(formSelector), function (form) {
    return form.contains(element);
  });
}

function bindOnSubmitValidation(form) {
  form.addEventListener('submit', function (e) {
    if(!e.target.checkValidity()) {
      e.preventDefault();
    }
  });
}

function bindReplaceDefaultBubble(field) {
  field.addEventListener('invalid', function (e) {
    e.target.classList.add('invalid');
    e.preventDefault();
  });
}

function bindValidationTrigger(field) {
  field.addEventListener('blur', function (e) {
    if (e.target.checkValidity()) {
      e.target.classList.remove('invalid');
    }
  });
}
