// Credit to: https://gist.github.com/jonathantneal/3062955
var matchesSelector = function(ElementPrototype) {
  return ElementPrototype.matchesSelector ||
  ElementPrototype.mozMatchesSelector ||
  ElementPrototype.msMatchesSelector ||
  ElementPrototype.oMatchesSelector ||
  ElementPrototype.webkitMatchesSelector ||
  function (selector) {
    var node = this, nodes = (node.parentNode || node.document).querySelectorAll(selector), i = -1;

    while (nodes[++i] && nodes[i] != node);

    return !!nodes[i];
  }

}(Element.prototype);

function isTextNode(element) {
  return element.nodeType === 3;
}

function delegate(element, event, delegateSelector, callback) {
  element.addEventListener(event, function (e) {
    if (!matchesSelector.call(e.target, delegateSelector)) {
      return;
    }

    callback(e);
  });
}

var find = Array.prototype.find;

function bindValidationTrigger() {
  delegate(document.body, 'focusout', '.tk-form-fields input', function (e) {
    var inputElement = e.target;

    if (inputElement.validity.valid) {
      inputElement.classList.remove('invalid');
    } else {
      inputElement.classList.add('invalid');
    }
  });
}

function bindCancelDefaultBubble() {
  function isTkFormField(field) {
    return !isTextNode(field) && matchesSelector.call(field, '.tk-form-fields input');
  }

  var observer = new MutationObserver(function (mutations) {

    mutations.forEach(function (mutation) {
      var field = find.call(mutation.addedNodes, isTkFormField);

      if(field) {

        field.addEventListener('invalid', function (e) {
          e.preventDefault();
        });
      }
    });

  });

  observer.observe(document.body, {childList: true, subtree: true});

}

module.exports = {
  VERSION: PACKAGE_VERSION,
  init: function init() {
    bindValidationTrigger();
    bindCancelDefaultBubble();
  }
};
