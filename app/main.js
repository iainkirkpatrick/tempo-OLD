import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import StyleSheet from 'stilr'

import Layout from './layout/containers/layout'

// render stilr styles
document.getElementById('stilr-stylesheet').textContent = StyleSheet.render()

render(
  <Provider>
    <Layout />
  </Provider>,
  document.querySelector('main')
)
