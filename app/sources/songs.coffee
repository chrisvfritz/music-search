Rx = require 'rx'

soundcloudSongs = require './songs/soundcloud'
spotifySongs    = require './songs/spotify'

module.exports = (query) ->
  Rx.Observable.merge soundcloudSongs(query), spotifySongs(query)
