define(
  [
    'backbone'
  ],
  function (Backbone) {

    'use strict';

    return Backbone.Model.extend({

      url: function () {

        return '/v1/albums/' + this.get('id');

      }

    });

  }

);