define (require) ->

  _ = require 'underscore'
  Marionette = require 'marionette'
  albumTrackItem = require 'text!/templates/album/albumTrackItem.html'

  class AlbumTrackItem extends Marionette.ItemView

    className: 'list-group-item clearfix'

    tagName: 'li'

    template: _.template albumTrackItem