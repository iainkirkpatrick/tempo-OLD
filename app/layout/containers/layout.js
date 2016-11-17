import React from 'react'
import { render } from 'react-dom'

import Header from '../components/header'
import Grid from '../../grid/containers/grid'

const Layout = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <Grid />
      </div>
    )
  }
})

export default Layout
