define (require) ->

  _ = require 'underscore'
  $ = require 'jquery'
  Marionette = require 'marionette'
  App = require 'App'
  albumBreadcrumb = require 'text!/templates/album/albumBreadcrumb.html'

  class AlbumBreadcrumb extends Marionette.CompositeView

    tagName: 'ol'

    className: 'breadcrumb'

    template: _.template albumBreadcrumb

    events:
      'click [data-event="albums"]': '_showAlbums'

    _showAlbums: (e) ->
      e.preventDefault()
      App.appRouter.navigate('/albums')
      require(['views/albums/AlbumsPageLayout'], (AlbumsPageLayout) ->
        App.container.getRegion('mainRegion').currentView.showPage(new AlbumsPageLayout())
        return
      )
      return
