sourceFactory = require '../_source-factory'

module.exports = (query) ->
  sourceFactory "http://api.soundcloud.com/tracks?q=#{query}", 'song/soundcloud'
