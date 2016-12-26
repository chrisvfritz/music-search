const Rx = require('rx')
const songStream = require('./song')
const artistStream = require('./artist')

module.exports = (query, type) => {
  switch(type) {
    case 'song':
      return songStream(query)
      break
    case 'artist':
      return artistStream(query)
      break
    default:
      return Rx.Observable.merge(
        songStream(query),
        artistStream(query)
      )
  }
}
