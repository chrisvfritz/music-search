sourceFactory = require '../_source-factory'

module.exports = (query) ->
  sourceFactory "http://api.soundcloud.com/users/?client_id=7889523d56cfc9d586bc1503d9d23baa&q=#{query}", 'artist/soundcloud'
