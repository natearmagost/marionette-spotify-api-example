define (require) ->

  $ = require 'jquery'
  Backbone = require 'backbone'
  App = require 'App'
  Album = require 'models/Album'

  require 'backbone-paginator'

  class Albums extends Backbone.PageableCollection

    model: Album

    url: ->
      '/v1/browse/new-releases?country=US'

    state:
      pageSize: 20
      firstPage: 0
      currentPage: 0

    mode: 'server'

    queryParams:
      currentPage: 'offset'
      offset: ->
        @state.currentPage * @state.pageSize
      totalPages: null
      totalRecords: null
      pageSize: 'limit'
      sortKey: 'sortBy'
      order: 'sortOrder'

    initialize: (models, options) ->
      @options = if options then options else {}
      return

    parse: (response) ->
      return response.albums.items
