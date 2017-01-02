module.exports = (artist) => {
  return {
    type: 'artist',
    name: artist.username,
    id: artist.id,
    image: artist.avatar_url,
    source: 'soundcloud'
  }
}
