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
      click: 'navigate'

    attributes: ->
      href: '/albums/' + @model.get 'id'

    template: _.template albumsCollectionItem

    templateHelpers: ->
      helpers:
        image: do =>
          @model.get('images')[1].url

    # App-specific properties below this point...

    navigate: (e) ->
      e.preventDefault()
      App.appRouter.navigate $(e.currentTarget).attr('href'), trigger: true
      return