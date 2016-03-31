axios = require 'axios'

module.exports = (url, callback) ->
  if url.indexOf('type=track') > -1
    target = 'tracks'
  else if url.indexOf('type=artist') > -1
    target = 'artists'
  else if url.indexOf('type=album') > -1
    target = 'albums'
  axios
    url: url
    headers:
      'Accept': 'application/json'
  .then (response) ->
    # console.log response.data['tracks']
    console.log url
    console.log target
    response.data[target].items
  .then callback
  .catch (error) ->
    console.log error
