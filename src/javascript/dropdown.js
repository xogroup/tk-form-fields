var delegate = require('./delegate');
var findParent = require('./find-parent');

var forEach = Array.prototype.forEach;

var ITEM_CLASS = 'tk-dropdown__item';
var ITEM_FOCUSED_STATE_CLASS = 'tk-dropdown__item--is-focused';
var CONTAINER_CLASS = 'tk-dropdown__container';

exports.initialize = function initialize(formSelector) {
  delegate(document.body, 'mousedown', formSelector + ' .' + ITEM_CLASS, function (e) {
    var container = findParent(e.target, '.' + CONTAINER_CLASS);
    var focusedElements = container.getElementsByClassName(ITEM_FOCUSED_STATE_CLASS);
    var input = container.querySelector('input');

    // Unfocus all elements
    forEach.call(focusedElements, function (element) {
      element.classList.remove(ITEM_FOCUSED_STATE_CLASS);
    });

    // Focus clicked element
    e.target.classList.add(ITEM_FOCUSED_STATE_CLASS);

    // Set field value
    input.value = e.target.dataset.value;
  });
};
