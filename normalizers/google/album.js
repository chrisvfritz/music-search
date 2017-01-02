module.exports = (album) => {
  return {
    type: 'album',
    name: album.album.name,
    id: album.album.albumId,
    artist: album.album.artist,
    artistID: album.album.artistId,
    image: album.album.albumArtRef,
    year: album.album.year,
    source: 'google'
  }
}
