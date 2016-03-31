module.exports = (artist) ->
  type: 'artist'
  name: artist.username
  id: artist.id
  image: artist.avatar_url
  source: 'soundcloud'
