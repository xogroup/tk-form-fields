window.XO = {
  membership: {
    Analytics: {
      reportLogIn: function () {},
      reportNewRegistration: function () {}
    }
  },
  cookie: {
    setCookie: function () {},
    getCookie: function () {},
    deleteCookie: function () {}
  }
};

const context = require.context('./spec', true, /spec\.js$/);
context.keys().forEach(context);

