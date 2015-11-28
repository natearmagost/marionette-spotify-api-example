define (require) ->

  Backbone = require 'backbone'

  class Tracks extends Backbone.Collection

    model: Backbone.Model.extend {}

    url: ->
      return '/v1/albums/' + @options.albumId + '/tracks'

    initialize: (models, options) ->
      @options = if options then options else {}

    parse: (response) ->
      response.items