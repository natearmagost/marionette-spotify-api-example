define (require) ->

  _ = require 'underscore'
  Marionette = require 'marionette'
  login = require 'text!/templates/login.html'

  class Login extends Marionette.ItemView

    className: 'login'

    template: _.template login