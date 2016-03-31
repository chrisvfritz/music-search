Rx = require 'rx'

# TODO: CHANGE TO PULL ALBUMS INSTEAD

# soundcloudSongs = require './songs/soundcloud'
spotifyAlbums    = require './albums/spotify'

module.exports = (query) ->
  Rx.Observable.merge spotifyAlbums(query)
