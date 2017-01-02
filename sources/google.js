'use strict'
const PlayMusic = require('playmusic')
const Rx = require('rx')
const normalizers = {
  1: require('../normalizers/google/song'),
  2: require('../normalizers/google/artist'),
  3: require('../normalizers/google/album')
}

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

  function normalize(item) {
    if (normalizers[item.type]) return normalizers[item.type](item)
    return
  }

  return Rx.Observable.create((observer) => {
    search(query, (err, items) => {
      if (err) observer.onError(err)
      items.map((item) => {
        observer.onNext(normalize(item))
      })
      observer.onCompleted()
    })
  })
}
