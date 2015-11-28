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
      'click [data-event="navigate"]': 'navigate'

    # App-specific properties below this point

    navigate: (e) ->
      e.preventDefault()
      App.appRouter.navigate $(e.currentTarget).attr('href'), trigger: true
      return