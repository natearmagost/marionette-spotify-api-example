define(
  [
    'underscore',
    'marionette',
    'views/albums/AlbumsCollectionItem',
    'text!/templates/albums/albumsCollection.html'
  ],
  function (_, Marionette, AlbumsCollectionItem, albumsCollection) {

    'use strict';

    return Marionette.CompositeView.extend({

      className: '',

      template: _.template(albumsCollection),

      childViewContainer: '.card-columns',

      childView: AlbumsCollectionItem

    });

  }

);