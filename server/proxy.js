const config = require('./config')
// const createServer = require('app/proxy').createServer

const http = require('http')
const httpProxy = require('http-proxy')
const Url = require('url')
const startsWith = require('lodash').startsWith
const assign = require('lodash').assign
const redirect = require('predirect')

const server = createServer(config)

server.listen(config.proxy.port, function () {
  console.log(JSON.stringify({
    name: 'proxy',
    level: 'info',
    message: `proxy server listening on port ${config.proxy.port}`
  }))
})

function createServer (config) {
  const proxy = httpProxy.createProxyServer({
    ignorePath: true
  })

  proxy.on('error', function (err, req, res) {
    console.log(JSON.stringify({
      name: 'proxy',
      level: 'warn',
      url: req.url,
      message: err.message
    }))
    if (err.code === 'ECONNREFUSED') {
      // as in, if it's a websocket proxy
      if (!res.setHeader) return res.end()
      // HACK delay request for one second
      setTimeout(function () {
        // don't redirect if no way to set redirect headers
        redirect(req, res, `http://localhost:${config.proxy.port}${req.url}`)
      }, 1000)
    } else {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end('Internal Server Error')
    }
  })

  const server = http.createServer(function (req, res) {
    const url = Url.parse(req.url)

    if (matches(config.api, url.pathname)) {
      proxy.web(req, res, { target: targetUrl(config.api, targetPath(config.api, url.pathname)) })
    } else if (matches(config.static, url.pathname)) {
      proxy.web(req, res, { target: targetUrl(config.static, targetPath(config.static, url.pathname)) })
    } else if (url.pathname === '/auth/success') {
      // special case HACK for feathers-authentication successRedirect to /auth/success
      proxy.web(req, res, { target: targetUrl(config.api, url.pathname) })
    } else {
      proxy.web(req, res, { target: targetUrl(config.render, targetPath(config.api, url.pathname)) })
    }
  })

  //
  // listen to the `upgrade` event and proxy the WebSocket requests as well
  //
  server.on('upgrade', function (req, socket, head) {
    const url = Url.parse(req.url)
    if (startsWith(url.pathname, '/primus')) {
      // special case HACK for primus
      proxy.ws(req, socket, head, { target: targetUrl(config.api, url.pathname) })
    } else {
      proxy.ws(req, socket, head, { target: targetUrl(config.api, targetPath(config.api, url.pathname)) })
    }
  })

  return server
}

function targetUrl (service, pathname) {
  const url = assign(
    { protocol: 'http', hostname: 'localhost' },
    service.url,
    { port: service.port },
    { pathname }
  )
  return Url.format(url)
}

function targetPath (service, pathname) {
  return pathname.slice(service.url.pathname.length - 1)
}

function matches (service, pathname) {
  return startsWith(pathname, service.url.pathname)
}
