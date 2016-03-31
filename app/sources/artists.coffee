Rx = require 'rx'

soundcloudArtists = require './artists/soundcloud'
spotifyArtists    = require './artists/spotify'

module.exports = (query) ->
  Rx.Observable.merge soundcloudArtists(query), spotifyArtists(query)
