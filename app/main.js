import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import StyleSheet from 'stilr'

import App from './app'

// render stilr styles
document.getElementById('stilr-stylesheet').textContent = StyleSheet.render()

render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector('main')
)
