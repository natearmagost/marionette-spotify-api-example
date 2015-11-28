define (require) ->

  $ = require 'jquery'
  _ = require 'underscore'
  Marionette = require 'marionette'
  App = require 'App'
  authenticated = require 'text!/templates/authenticated.html'

  class Login extends Marionette.LayoutView

    template: _.template authenticated

    regions: 
      pageRegion: '#page'

    events:
      'click [data-event="navigate"]': 'navigate'
      'click [data-event="logout"]': 'logOut'

    onRender: ->
      $('body').addClass 'authenticated'

    onShow: ->
      @showPage(@options.module) if @options.module

    onDestroy: ->
      $('body').removeClass 'authenticated'

    # App-specific properties below this point...

    showPage: (module) ->
      @getRegion('pageRegion').show module

    navigate: (e) ->
      e.preventDefault()
      App.appRouter.navigate $(e.currentTarget).attr('href'), trigger: true
      return

    logOut: ->
      App.appRouter.navigate '/logout', trigger: true