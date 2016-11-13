import React from 'react'
import { render } from 'react-dom'

import Header from './header'
import Grid from './grid'

const App = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <Grid />
      </div>
    )
  }
})

export default App
