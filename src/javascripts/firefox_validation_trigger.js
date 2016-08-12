var TkFormFields = {
  FireFoxValidationTrigger: function () {
    // check if browser is FF
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      var email = document.getElementById('email');
      email.addEventListener('keyup', TkFormFields.validate, false);
    }
  },

  validate: function(e) {
    setTimeout(function() {
      var emailInput = e.target;
      var emailValid = emailInput.checkValidity();
      var tkFormFieldsDiv = document.getElementsByClassName('tk-form-fields')[0];
      console.log('tkFormFieldsDiv: ', tkFormFieldsDiv);
      if (emailValid) {
        console.log('valid email');
      } else {
        console.log('INVALID email');
        tkFormFieldsDiv.className += " input-valid-not-focused";
        tkFormFieldsDiv.className += " input-invalid";
      }
    }, 10)
  }
}

window.onload = TkFormFields.FireFoxValidationTrigger;
