define(
  [
    'underscore',
    'jquery',
    'marionette',
    'App',
    'text!/templates/album/albumBreadcrumb.html'
  ],
  function (_, $, Marionette, App, albumBreadcrumb) {

    'use strict';

    return Marionette.ItemView.extend({

      tagName: 'ol',

      className: 'breadcrumb',

      template: _.template(albumBreadcrumb),

      events: {

        'click [data-event="navigate"]': 'navigate'

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