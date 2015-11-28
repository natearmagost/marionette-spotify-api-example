define(
  [
    'marionette',
    'App'
  ],
  function(Marionette, App) {

    'use strict';

    return Marionette.AppRouter.extend({

      appRoutes: {

        '(/)':                  'login',
        'albums(/p:page)(/)':   'albums',
        'albums/:id(/)':        'album'

      },

      controller: { // Routes

        login: function () {

          require(['views/Login'], function(Login) {

            App.container.getRegion('mainRegion').show(new Login());

          });

        },

        albums: function () {

          require(['views/Authenticated', 'views/albums/AlbumsPageLayout'], function(Authenticated, AlbumsPageLayout) {

            if (!App.container.getRegion('mainRegion').currentView || !App.container.getRegion('mainRegion').currentView.showPage) {

              App.container.getRegion('mainRegion').show(new Authenticated({
                module: new AlbumsPageLayout()
              }));

            } else {

              App.container.getRegion('mainRegion').currentView.showPage(new AlbumsPageLayout());

            }

          });

        },

        album: function (id) {

          require(['views/Authenticated', 'views/album/AlbumPageLayout'], function(Authenticated, AlbumPageLayout) {

            if (!App.container.getRegion('mainRegion').currentView || !App.container.getRegion('mainRegion').currentView.showPage) {

              App.container.getRegion('mainRegion').show(new Authenticated({
                module: new AlbumPageLayout({
                  id: id
                })
              }));

            } else {

              App.container.getRegion('mainRegion').currentView.showPage(new AlbumPageLayout({
                id: id
              }));

            }

          });

        }

      }

    });

  }

);