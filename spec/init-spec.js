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
      document.body.appendChild(this.formNode);
      this.inputField = this.formNode.querySelector('input');

      // Trigger setup
      triggerEvent(this.inputField, 'click', { bubbles: true });
    });

    afterEach(function () {
      document.body.removeChild(this.formNode);
    });

    it('Sanity check: field is configured as invalid', function () {
      expect(this.inputField.validity.valid).toBe(false);
    });

    describe('on blur', function () {
      beforeEach(function () {
        triggerEvent(this.inputField, 'blur', { bubbles: false });
      });

      it('adds the invalid class to the field', function () {
        expect(this.inputField.classList.contains('invalid')).toBe(true);
      });

      describe('when fixing field', function () {
        beforeEach(function () {
          this.inputField.value = "test@xogroup.com";

          triggerEvent(this.inputField, 'blur', { bubbles: false });
        });

        it('adds the invalid class to the field', function () {
          expect(this.inputField.classList.contains('invalid')).toBe(false);
        });
      });
    });

    describe('on invalid', function (){
      beforeEach(function (){
        triggerEvent(this.inputField, 'invalid', { bubbles: false });
      });

      it('adds the invalid class to the field', function (){
        expect(this.inputField.classList.contains('invalid')).toBe(true);
      });
    });
  });
});
