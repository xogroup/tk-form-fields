const FormFields = require('index');
const triggerEvent = function (element, eventName, options) {
  const event = new Event(eventName, options);
  element.dispatchEvent(event);
}

function toNode(htmlString) {
  const container = document.createElement('div');
  container.innerHTML = htmlString;

  return container.firstChild;
}

describe('XO.FormFields.init', function () {
  beforeEach(function () {
    FormFields.init();
  });

  describe('when form has invalid inputs', function () {
    beforeEach(function () {
      this.formNode = toNode('<form class="tk-form-fields"><input type="email" required /></form>');
      this.inputField = this.formNode.querySelector('input');
      document.body.appendChild(this.formNode);
    });

    afterEach(function () {
      document.body.removeChild(this.formNode);
    });

    it('Sanity check: field is configured as invalid', function () {
      expect(this.inputField.validity.valid).toBe(false);
    });

    describe('on focusout', function () {
      beforeEach(function () {
        triggerEvent(this.inputField, 'focusout', { bubbles: true });
      });

      it('adds the invalid class to the field', function () {
        expect(this.inputField.classList.contains('invalid')).toBe(true);
      });
    });
  });
});
