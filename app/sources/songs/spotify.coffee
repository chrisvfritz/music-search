sourceFactory = require '../_source-factory'

module.exports = (query) ->
  sourceFactory "https://api.spotify.com/v1/search?type=track&q=#{query}", 'song/spotify' 
