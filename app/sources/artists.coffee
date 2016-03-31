Rx = require 'rx'

# TODO: CHANGE TO PULL ARTISTS INSTEAD

soundcloudArtists = require './artists/soundcloud'
spotifyArtists    = require './artists/spotify'

module.exports = (query) ->
  Rx.Observable.merge soundcloudArtists(query), spotifyArtists(query)
