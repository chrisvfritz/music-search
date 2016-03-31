song = tracks.items
module.exports = (song) ->
  type: 'song'
  source: 'spotify'
  source_id: song.id
  title: song.name
  artists: song.artists.map (artist) -> artist.name
  album: song.album.name
  duration: song.duration_ms
