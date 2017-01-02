// SoundCloud artist
const axios = require('axios')
const Rx = require('rx')
const KEYS = require('../../KEYS.json')
const normalizer = require('../../normalizers/soundcloud')

module.exports = (query) => {
  var url = `http://api.soundcloud.com/users/?client_id=${KEYS['SoundCloud']}&q=${query}`
  function searcher(url, callback) {
    return axios({
      url: url,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.data)
    .then(callback)
    .catch(error => console.log(error))
  }

  return Rx.Observable.create((observer) => {
    searcher(url, (items) => {
      observer.onNext(items.map(item => normalizer.artist(item)))
      observer.onCompleted()
    })
  })
}
