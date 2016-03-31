module.exports = (album) ->
  type: 'album'
  source: 'spotify'
  id: album.id
  name: album.name
  image: album.images[0]['url']
  # songs: album.tracks.map{|t| t.name}
