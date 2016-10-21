var delegate = require('./delegate');
var find = require('array-find');
var forEach = Array.prototype.forEach;

exports.initialize = function initializeForm(formElement) {
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

exports.forElement = function forElement(element) {
  return find(document.body.getElementsByClassName('tk-form-fields'), function (form) {
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
    var inputElement = e.target;
    e.preventDefault();

    toggleInvalid(inputElement);
  });
}

function bindValidationTrigger(field) {
  field.addEventListener('blur', function (e) {
    var inputElement = e.target;
    toggleInvalid(inputElement);
  });
}

function toggleInvalid(inputElement) {
  if (inputElement.validity.valid) {
    inputElement.classList.remove('invalid');
  } else {
    inputElement.classList.add('invalid');
  }
}

