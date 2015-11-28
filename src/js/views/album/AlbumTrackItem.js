define(
  [
    'underscore',
    'marionette',
    'text!/templates/album/albumTrackItem.html'
  ],
  function (_, Marionette, albumTrackItem) {

    'use strict';

    return Marionette.ItemView.extend({

      className: 'list-group-item clearfix',

      tagName: 'li',

      template: _.template(albumTrackItem)

    });

  }

);