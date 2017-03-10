module.exports = (song) => {
  return {
    type: 'song',
    source: 'google',
    source_id: song.track.nid,
    title: song.track.title,
    artists: [ song.track.artist ],
    album: song.track.album,
    duration: parseInt(song.track.durationMillis),
    artwork: song.track.albumArtRef[0] ? song.track.albumArtRef[0].url : null
  }
}
