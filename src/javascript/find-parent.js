var find = require('array-find');

module.exports = function findParent(element, parentSelector) {
  return find(document.body.querySelectorAll(parentSelector), function (parent) {
    return parent.contains(element);
  });
}
