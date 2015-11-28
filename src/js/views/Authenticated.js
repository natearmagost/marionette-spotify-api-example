define(
  [
    'jquery',
    'underscore',
    'marionette',
    'App',
    'text!/templates/authenticated.html'
  ],
  function ($, _, Marionette, App, authenticated) {

    'use strict';

    return Marionette.LayoutView.extend({

      template: _.template(authenticated),

      regions: {

        pageRegion: '#page'

      },

      events: {

        'click [data-event="navigate"]': 'navigate',
        'click [data-event="logout"]': 'logOut'

      },

      onRender: function () {

        $('body').addClass('authenticated');

      },

      onShow: function () {

        if (this.options.module) {

          this.showPage(this.options.module);

        }

      },

      onDestroy: function () {
        
        $('body').removeClass('authenticated');

      },

      /** App-specific properties below this point... */

      showPage: function (module) {

        this.getRegion('pageRegion').show(module);

      },

      navigate: function (e) {

        e.preventDefault();

        App.appRouter.navigate($(e.currentTarget).attr('href'), {
          trigger: true
        });

      },

      logOut: function () {

        App.appRouter.navigate('/logout', {
          trigger: true
        });

      }

    });

  }

);