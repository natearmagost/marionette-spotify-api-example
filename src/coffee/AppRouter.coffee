define (require) ->

  Marionette = require 'marionette'
  App = require 'App'

  class AppRouter extends Marionette.AppRouter

    appRoutes:
      '(/)':                  'login'
      'albums(/p:page)(/)':   'albums'
      'albums/:id(/)':        'album'

    controller: # Routes

      login: ->
        require ['views/Login'], (Login) ->
          App.container.getRegion('mainRegion').show new Login()

      albums: ->
        require(['views/Authenticated', 'views/albums/AlbumsPageLayout'], (Authenticated, AlbumsPageLayout) ->
          if not App.container.getRegion('mainRegion').currentView or not App.container.getRegion('mainRegion').currentView.showPage
            App.container.getRegion('mainRegion').show(new Authenticated(module: new AlbumsPageLayout()))
          else
            App.container.getRegion('mainRegion').currentView.showPage(new AlbumsPageLayout())
        )

      album: (id) ->
        require(['views/Authenticated', 'views/album/AlbumPageLayout'], (Authenticated, AlbumPageLayout) ->
          if not App.container.getRegion('mainRegion').currentView or not App.container.getRegion('mainRegion').currentView.showPage
            App.container.getRegion('mainRegion').show(new Authenticated(module: new AlbumPageLayout(id: id)))
          else 
            App.container.getRegion('mainRegion').currentView.showPage(new AlbumPageLayout id: id)
        )