define (require) ->

  _ = require 'underscore'
  $ = require 'jquery'
  Marionette = require 'marionette'
  App = require 'App'
  albumsCollectionItem = require 'text!/templates/albums/albumsCollectionItem.html'

  class AlbumsCollectionItem extends Marionette.ItemView

    className: 'card'

    tagName: 'a'

    events:
      click: '_showDetails'

    attributes: ->
      href: "/albums/#{@model.get('id')}"

    template: _.template albumsCollectionItem

    templateHelpers: ->
      helpers:
        image: do =>
          @model.get('images')[1].url

    _showDetails: (e) ->
      e.preventDefault()
      App.appRouter.navigate($(e.currentTarget).attr('href'))
      require(['views/album/AlbumPageLayout'], (AlbumPageLayout) =>
        App.container.getRegion('mainRegion').currentView.showPage(new AlbumPageLayout(id: @model.get('id')))
        return
      )
      return
