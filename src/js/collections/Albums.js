define(
  [
    'jquery',
    'backbone',
    'App',
    'models/Album',
    'backbone-paginator'
  ],
  function ($, Backbone, App, Album) {

    'use strict';

    return Backbone.PageableCollection.extend({

      model: Album,

      url: function() {

        return '/v1/browse/new-releases?country=US';

      },

      state: {
        pageSize: 20,
        firstPage: 0,
        currentPage: 0
      },

      mode: 'server',

      queryParams: {
        currentPage: 'offset',
        offset: function () {
          return this.state.currentPage * this.state.pageSize;
        },
        totalPages: null,
        totalRecords: null,
        pageSize: 'limit',
        sortKey: 'sortBy',
        order: 'sortOrder'
      },

      initialize: function (models, options) {

        this.options = options || {};

      },

      parse: function (response) {

        return response.albums.items;

      }

    });

  }

);