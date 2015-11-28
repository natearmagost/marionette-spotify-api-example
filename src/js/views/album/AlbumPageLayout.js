define(
  [
    'underscore',
    'jquery',
    'marionette',
    'models/Album',
    'collections/Tracks',
    'views/album/AlbumBreadcrumb',
    'views/album/AlbumItem',
    'text!/templates/album/albumPageLayout.html'
  ],
  function (_, $, Marionette, Album, Tracks, AlbumBreadcrumb, AlbumItem, albumPageLayout) {

    'use strict';

    return Marionette.LayoutView.extend({

      className: 'container',

      template: _.template(albumPageLayout),

      regions: {

        albumBreadcrumbRegion: '.album-breadcrumb-region',
        albumItemRegion: '.album-item-region'

      },

      initialize: function () {

        this.model = new Album({
          id: this.options.id
        });

        this.collection = new Tracks({}, {
          albumId: this.options.id
        });

      },

      onRender: function () {

        $.when(this.model.fetch(), this.collection.fetch()).done($.proxy(function() {

          this.getRegion('albumBreadcrumbRegion').show(new AlbumBreadcrumb({
            model: this.model
          }));

          this.getRegion('albumItemRegion').show(new AlbumItem({
            model: this.model,
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