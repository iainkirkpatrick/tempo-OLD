import http from 'http'
import Server from 'connect'

const ecstatic = require('ecstatic')
const config = require('./config')
// const createServer = require('app/static').createServer
const Url = require('url')

const server = createServer(config)

server.listen(config.static.port, function () {
  const staticUrl = Url.format(config.static.url)
  console.log(`static server at ${staticUrl}`)
})

function createServer (config) {
  // const ecstatic = config.livereload ?
  //   require('ecstatic-lr') : require('ecstatic')

  const app = Server()
    .use(ecstatic(Url.format(config.static)))

  return http.createServer(app)
}
