define(
  [
    'underscore',
    'jquery',
    'marionette',
    'collections/Albums',
    'views/albums/AlbumsCollection',
    'text!/templates/albums/albumsPageLayout.html'
  ],
  function (_, $, Marionette, Albums, AlbumsCollection, albumsPageLayout) {

    'use strict';

    return Marionette.LayoutView.extend({

      className: 'container',

      template: _.template(albumsPageLayout),

      regions: {

        albumCollectionRegion: '.albums-collection-region'

      },

      initialize: function () {

        this.collection = new Albums({
          state: {
            firstPage: 0,
            currentPage: (this.options.page -1),
            pageSize: 20
          }
        });

      },

      onRender: function () {

        $.when(this.collection.fetch()).done($.proxy(function() {

          this.getRegion('albumCollectionRegion').show(new AlbumsCollection({
            collection: this.collection
          }));

          $(this.el).find('.loader').prop('hidden', true);
          $(this.el).find('.loading').fadeIn();

        }, this)).fail($.proxy(function () {

          $(this.el).find('.loader img').replaceWith('<p class="text-muted text-center">The page could not be loaded at this time.</p>');

        }, this));

      }

    });

  }

);