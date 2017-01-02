module.exports = (artist) => {
  return {
    type: 'artist',
    name: artist.artist.name,
    id: artist.artist.artistId,
    image: artist.artist.artistArtRef,
    source: 'google'
  }
}
