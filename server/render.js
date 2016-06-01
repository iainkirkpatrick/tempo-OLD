// https://github.com/jlongster/react-redux-universal-hot-example/blob/master/src/server.js
// import 'babel-register'

import http from 'http'
import Url from 'url'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
// import { Router, RouterContext, match, createMemoryHistory as createHistory  } from 'react-router'
import sendHtml from 'send-data/html'
import sendError from 'send-data/error'
// import redirect from 'predirect'
import Style from 'stilr'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

// const createStore = require('app/store')
// const createRoutes = require('app/routes')
// const getServerUrl = require('app/util/get-server-url')
// const staticServerUrl = getServerUrl('static')

const config = require('./config')
const server = http.createServer(render)
server.listen(config.render.port, function () {
  const renderUrl = Url.format(config.render.url)
  console.log(`render server at ${renderUrl}`)
})


function render (req, res) {
  /*
  const history = createHistory()
  const store = createStore(undefined, history)

  match({
    routes: createRoutes(store),
    location: req.url
  }, function (err, redirectLocation, renderProps) {
    if (redirectLocation) {
      redirect(req, res, redirectLocation.pathname + redirectLocation.search)
    } else if (err) {
      sendError(req, res, { body: err })
    } else if (!renderProps) {
      sendError(req, res, {
        statusCode: 404,
        body: new Error('Not found')
      })
    } else {
      // TODO server-side rendering
      const component = <Provider store={store}>
        <RouterContext { ...renderProps } />
      </Provider>
  */
      var innerHtml = ''
      var state = {}
      /*
      var state = store.getState()
      try {
        innerHtml = renderToString(component)
      } catch (err) {
        console.error(err.stack)
        return sendError(req, res, { body: err })
      }
      */

      const html = renderFullPage(innerHtml, state)

      sendHtml(req, res, html)
  /*
    }
  })
  */
}

function renderFullPage (innerHtml, initialState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>TEMPO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style id="stylesheet">${renderCss()}</style>
      </head>
      <body>
        <main>${ innerHtml }</main>
        <script>
          window.__data = ${ JSON.stringify(initialState) }
          console.log('made with \u2764 by Enspiral Dev Academy http://devacademy.co.nz')
        </script>
        <script src="${Url.resolve(Url.format(config.static.url), 'bundle.js')}"></script>
      </body>
    </html>
  `
}

function renderCss () {
  return postcss(
    autoprefixer()
  ).process(
    Style.render()
  ).css
}
