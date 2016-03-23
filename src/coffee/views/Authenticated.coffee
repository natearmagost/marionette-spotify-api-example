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
      'click [data-event="home"]': '_showAlbums'
      'click [data-event="logout"]': '_logOut'

    onRender: ->
      $('body').addClass 'authenticated'
      return

    onShow: ->
      @showPage(@options.module) if @options.module
      return

    onDestroy: ->
      $('body').removeClass 'authenticated'
      return

    showPage: (module) ->
      @getRegion('pageRegion').show module
      return

    _showAlbums: (e) -> # For now just use the albums page as home
      e.preventDefault()
      App.appRouter.navigate('/')
      require(['views/albums/AlbumsPageLayout'], (AlbumsPageLayout) ->
        App.container.getRegion('mainRegion').currentView.showPage(new AlbumsPageLayout())
        return
      )
      return

    _logOut: ->
      App.appRouter.navigate('/')
      require ['views/Login'], (Login) ->
        App.container.getRegion('mainRegion').show(new Login())
        return
      return
