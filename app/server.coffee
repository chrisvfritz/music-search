Restify = require 'restify'

module.exports =

  start: (env) ->

    server = Restify.createServer
      name: 'api.music-search.local'

    initializeRouteFor = (searchType) ->
      server.get "/#{searchType}/:query", (request, response, next) ->
        source = require("./sources/#{searchType}") request.params.query
        data = []
        source.subscribe (datum) ->
          data = data.concat datum
        , (error) ->
          console.log error
        , ->
          response.send data
          next()

    initializeRouteFor searchType for searchType in [
      'music'
      'songs'
      'artists'
      'albums'
    ]

    server.listen 8080, ->
      console.log '%s listening at %s', server.name, server.url
