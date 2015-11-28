define(
  [
    'underscore',
    'marionette',
    'text!/templates/login.html'
  ],
  function (_, Marionette, login) {

    'use strict';

    return Marionette.ItemView.extend({

      className: 'login',

      template: _.template(login)

    });

  }

);