define (require) ->

  Backbone = require 'backbone'

  class Album extends Backbone.Model

    url: ->
      '/v1/albums/' + @get 'id'