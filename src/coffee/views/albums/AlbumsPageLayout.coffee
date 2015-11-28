define (require) ->

  _ = require 'underscore'
  $ = require 'jquery'
  Marionette = require 'marionette'
  Albums = require 'collections/Albums'
  AlbumsCollection = require 'views/albums/AlbumsCollection'
  albumsPageLayout = require 'text!/templates/albums/albumsPageLayout.html'

  class AlbumItem extends Marionette.LayoutView

    className: 'container'

    template: _.template albumsPageLayout

    regions:
      albumCollectionRegion: '.albums-collection-region'

    initialize: ->
      @collection = new Albums
        state:
          firstPage: 0,
          currentPage: @options.page - 1,
          pageSize: 20
      return

    onRender: ->
      $.when(@collection.fetch()).done( =>
        @getRegion('albumCollectionRegion').show(new AlbumsCollection collection: @collection)
        $(@el).find('.loader').prop 'hidden', true
        $(@el).find('.loading').fadeIn()
        return
      ).fail( =>
        $(@el).find('.loader img').replaceWith '<p class="text-muted text-center">The page could not be loaded at this time.</p>'
      )
      return