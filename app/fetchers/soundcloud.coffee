axios = require 'axios'

module.exports = (url, callback) ->
  axios
    url: url
    headers:
      'Accept': 'application/json'
  .then (response) ->
    response.data
  .then callback
  .catch (error) ->
    console.log error
