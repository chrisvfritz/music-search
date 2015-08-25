axios = require 'axios'

module.exports = (url, callback) ->
  axios
    url: url
    headers:
      'Authorization': 'Bearer ' + process.env.SPOTIFY_TOKEN
      'Accept': 'application/json'
  .then (response) ->
    response.data.tracks.items
  .then callback
  .catch (error) ->
    console.log error
