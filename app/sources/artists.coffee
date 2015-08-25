Rx = require 'rx'

# TODO: CHANGE TO PULL ARTISTS INSTEAD

soundcloudSongs = require './songs/soundcloud'
spotifySongs    = require './songs/spotify'

module.exports = (query) ->
  Rx.Observable.merge soundcloudSongs(query), spotifySongs(query)
