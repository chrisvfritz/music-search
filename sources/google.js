'use strict'

const PlayMusic = require('playmusic')
const Rx = require('rx')

const auth = require('../KEYS.json')['google']

module.exports = (query, type) => {
  function filterType(item) {
    switch (type) {
      case 'song':
        return item.type === '1'
        break
      case 'artist':
        return item.type === '2'
        break
      case 'album':
        return item.type === '3'
        break
      default:
        return item
    }
  }

  var PM = new PlayMusic()

  function search(query, callback) {
    PM.init(auth, (err) => {
      if (err) return callback(err)
      PM.search(query, 20, (err, data) => {
        callback(err, data.entries.filter(filterType))
      })
    })
  }

  return Rx.Observable.fromNodeCallback(search)(query)
}
