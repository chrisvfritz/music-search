Rx = require 'rx'

module.exports = (url, normalizerType) ->
  sourceType = normalizerType.split('/')[-1..][0]
  searcher   = require "../fetchers/#{sourceType}"
  normalizer = require "../normalizers/#{normalizerType}"

  Rx.Observable.create (observer) ->
    searcher url, (items) ->
      observer.onNext items.map (item) ->
        normalizer item
      observer.onCompleted()
