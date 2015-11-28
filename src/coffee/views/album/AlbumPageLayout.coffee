define (require) ->

  _ = require 'underscore'
  $ = require 'jquery'
  Marionette = require 'marionette'
  Album = require 'models/Album'
  Tracks = require 'collections/Tracks'
  AlbumBreadcrumb = require 'views/album/AlbumBreadcrumb'
  AlbumItem = require 'views/album/AlbumItem'
  albumPageLayout = require 'text!/templates/album/albumPageLayout.html'

  class AlbumPageLayout extends Marionette.LayoutView

    className: 'container'

    template: _.template albumPageLayout

    regions:
      albumBreadcrumbRegion: '.album-breadcrumb-region'
      albumItemRegion: '.album-item-region'

    initialize: ->
      @model = new Album
        id: @options.id
      @collection = new Tracks {}, albumId: @options.id
      return

    onRender: ->
      $.when(@model.fetch(), @collection.fetch()).done( =>
        @getRegion('albumBreadcrumbRegion').show(new AlbumBreadcrumb model: @model)
        @getRegion('albumItemRegion').show(new AlbumItem model: @model, collection: @collection)
        $(@el).find('.loader').prop 'hidden', true
        $(@el).find('.loading').fadeIn()
        return
      ).fail( =>
        $(@el).find('.loader img').replaceWith '<p class="text-muted text-center">The page could not be loaded at this time.</p>'
      )
      return