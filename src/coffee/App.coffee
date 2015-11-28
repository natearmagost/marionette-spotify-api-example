define (require) ->

  _ = require 'underscore'
  Backbone = require 'backbone'
  Marionette = require 'marionette'

  # Create a new Marionette Application
  App = new Marionette.Application()

  class Container extends Marionette.LayoutView
    id: 'app'
    template: _.template '<div id="main"></div>'
    regions:
      mainRegion: '#main'

  App.container = new Container el: 'body'

  App.container.render()

  App.on 'start', ->
    Backbone.history.start({ pushState: true })
    return

  return App