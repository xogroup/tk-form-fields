var matchesSelector = require('./matches-selector-polyfill');

module.exports = function delegate(element, event, delegateSelector, callback) {
  element.addEventListener(event, function (e) {
    if (!matchesSelector.call(e.target, delegateSelector)) {
      return;
    }

    callback(e);
  });
}

