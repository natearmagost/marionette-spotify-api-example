define(
  [
    'underscore',
    'marionette',
    'views/album/AlbumTrackItem',
    'text!/templates/album/albumItem.html'
  ],
  function (_, Marionette, AlbumTrackItem, albumItem) {

    'use strict';

    return Marionette.CompositeView.extend({

      className: 'card',

      template: _.template(albumItem),

      templateHelpers: function () {
        return {
          helpers: {
            image: _.bind(function () {
              return this.model.get('images')[0].url;
            }, this)()
          }
        };
      },

      childViewContainer: '.list-group',

      childView: AlbumTrackItem

    });

  }

);