define (require) ->

  _ = require 'underscore'
  Marionette = require 'marionette'
  AlbumTrackItem = require 'views/album/AlbumTrackItem'
  albumItem = require 'text!/templates/album/albumItem.html'

  class AlbumItem extends Marionette.CompositeView

    className: 'card'

    template: _.template albumItem

    templateHelpers: ->
      helpers:
        image: do =>
          @model.get('images')[0].url

    childViewContainer: '.list-group'

    childView: AlbumTrackItem