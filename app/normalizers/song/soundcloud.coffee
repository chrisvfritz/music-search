module.exports = (song) ->
  type: 'song'
  source: 'soundcloud',
  source_id: song.id
  title: song.title
  artists: [ song.user.username ]
  album: null
  duration: song.duration
