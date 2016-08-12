import React from 'react'
import { connect } from 'react-redux'

import GridContainer from 'client/grid/containers/grid'

import style from '../styles/layout'

class LayoutContainer extends React.Component {
  render () {
    return <div className={style.heading}>
      <span>TEMPO</span>
      <GridContainer />
    </div>
  }
}

export default connect(

)(LayoutContainer)
