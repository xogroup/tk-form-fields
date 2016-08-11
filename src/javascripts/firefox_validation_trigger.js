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
    }, 1000)
  }
}

window.onload = TkFormFields.FireFoxValidationTrigger;