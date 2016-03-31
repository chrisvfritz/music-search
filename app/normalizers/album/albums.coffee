module.exports = (artist) ->
  source: 'spotify',
  id: album.id,
  name: album.name,
  image: album.images.first['url'],
  songs: album.tracks.map{|t| t.name}
