var restify = require('restify');
var googleStream = require('./sources/google')
var soundcloudStream = require('./sources/soundcloud/factory')
const Rx = require('rx')

module.exports = {
  start: (env) => {

    var server = restify.createServer();

    function initializeRoute(searchType) {
      var data = []
      server.get(`/${searchType}/:query`, (req, res) => {
        var stream = Rx.Observable.merge(
          soundcloudStream(req.params.query, searchType),
          googleStream(req.params.query, searchType)
        )
        stream.subscribe((item) => {
          data = data.concat(item)
        }, (err) => {
          console.log()
        }, () => {
          res.send(data)
        })
      })
    }

    const searchTypes = [
      'music',
      'song',
      'artist',
      'album'
    ]

    searchTypes.map((type) => {
      initializeRoute(type)
    })

    server.listen(8080, function() {
      console.log('%s listening at %s', server.name, server.url);
    });
  }
}
