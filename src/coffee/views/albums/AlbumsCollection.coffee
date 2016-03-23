define (require) ->

  _ = require 'underscore'
  Marionette = require 'marionette'
  AlbumsCollectionItem = require 'views/albums/AlbumsCollectionItem'
  albumsCollection = require 'text!/templates/albums/albumsCollection.html'

  class AlbumsCollection extends Marionette.CompositeView

    template: _.template albumsCollection

    childViewContainer: '.card-columns'

    childView: AlbumsCollectionItem
