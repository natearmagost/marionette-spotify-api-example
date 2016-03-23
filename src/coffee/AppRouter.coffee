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
          App.container.getRegion('mainRegion').show(new Login())
          return
        return

      albums: ->
        require(['views/albums/AlbumsPageLayout'], (AlbumsPageLayout) ->
          if not App.container.getRegion('mainRegion').currentView or not App.container.getRegion('mainRegion').currentView.showPage
            require(['views/Authenticated'], (Authenticated) ->
              App.container.getRegion('mainRegion').show(new Authenticated(module: new AlbumsPageLayout()))
              return
            )
          else
            App.container.getRegion('mainRegion').currentView.showPage(new AlbumsPageLayout())
          return
        )
        return

      album: (id) ->
        require(['views/album/AlbumPageLayout'], (AlbumPageLayout) ->
          if not App.container.getRegion('mainRegion').currentView or not App.container.getRegion('mainRegion').currentView.showPage
            require(['views/Authenticated'], (Authenticated) ->
              App.container.getRegion('mainRegion').show(new Authenticated(module: new AlbumPageLayout(id: id)))
              return
            )
          else
            App.container.getRegion('mainRegion').currentView.showPage(new AlbumPageLayout(id: id))
          return
        )
        return
