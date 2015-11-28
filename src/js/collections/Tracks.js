define(
  [
    'backbone'
  ],
  function (Backbone) {

    'use strict';

    return Backbone.Collection.extend({

      model: Backbone.Model.extend({}),

      url: function() {

        return '/v1/albums/' + this.options.albumId + '/tracks';

      },

      initialize: function (models, options) {

        this.options = options || {};

      },

      parse: function (response) {

        return response.items;

      }

    });

  }

);