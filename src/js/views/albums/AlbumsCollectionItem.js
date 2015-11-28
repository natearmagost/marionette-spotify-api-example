define(
  [
    'underscore',
    'jquery',
    'marionette',
    'App',
    'text!/templates/albums/albumsCollectionItem.html'
  ],
  function (_, $, Marionette, App, album) {

    'use strict';

    return Marionette.ItemView.extend({

      className: 'card',

      tagName: 'a',

      events: {

        'click': 'navigate'

      },

      attributes: function () {

        return {
          href: '/albums/' + this.model.get('id')
        };

      },

      template: _.template(album),

      templateHelpers: function () {
        return {
          helpers: {
            image: _.bind(function () {
              return this.model.get('images')[1].url;
            }, this)()
          }
        };
      },

      /** App-specific properties below this point... */

      navigate: function (e) {

        e.preventDefault();

        App.appRouter.navigate($(e.currentTarget).attr('href'), {
          trigger: true
        });

      }

    });

  }

);