var restify = require('restify');
var googleStream = require('./sources/google')
var soundcloudStream = require('./sources/soundcloud')
const Rx = require('rx')

module.exports = {
  start: (env) => {

    var server = restify.createServer();

    server.use(restify.CORS({

      // Defaults to ['*'].
      origins: ['*']

    }));

    function initializeRoute(searchType) {
      server.get(`/${searchType}/:query`, (req, res) => {
        var data = []
        var stream = Rx.Observable.merge(
          soundcloudStream(req.params.query, searchType),
          googleStream(req.params.query, searchType)
        )
        stream.subscribe((item) => {
          data = data.concat(item)
        }, (err) => {
          console.log(err)
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

    server.listen(9393, function() {
      console.log('%s listening at %s', server.name, server.url);
    });
  }
}
