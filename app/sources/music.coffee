Rx = require 'rx'

albums  = require './albums'
artists = require './artists'
songs   = require './songs'

module.exports = (query) ->
  Rx.Observable.merge albums(query), artists(query), songs(query)
