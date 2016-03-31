module.exports = (artist) ->
  source: 'spotify',
  id: artist.id
  image: artist.images.first
  name: artist.name
