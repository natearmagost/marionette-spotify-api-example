require.config(
  baseUrl: '/js'
  paths:
    'underscore': 'lib/backbone/underscore'
    'backbone': 'lib/backbone/backbone-min'
    'marionette': 'lib/backbone/backbone.marionette.min'
    'backbone-paginator': 'lib/backbone/backbone.paginator.min'
    'backbone.paginator': 'backbone-paginator'
    'jquery': 'lib/jquery/jquery-2.1.4.min'
    'text': 'lib/require/text'
  shim:
    'underscore':
      exports: '_'
    'backbone':
      deps: ['underscore', 'jquery']
      exports: 'Backbone'
    'marionette':
      deps: ['underscore', 'backbone', 'jquery']
      exports: 'Marionette'
    'backbone-paginator':
      deps: ['underscore', 'backbone']
    'jquery':
      exports: '$'
)

require(['App', 'AppRouter'], (App, AppRouter) ->
  App.appRouter = new AppRouter()
  App.start()
  return
)
