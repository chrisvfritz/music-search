module.exports = (artist) ->
  type: 'artist'
  source: 'spotify',
  id: artist.id,
  image: artist.images.first,
  name: artist.name
