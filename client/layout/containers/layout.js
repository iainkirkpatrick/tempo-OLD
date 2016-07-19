import React from 'react'
import { connect } from 'react-redux'

import style from '../styles/layout'

class LayoutContainer extends React.Component {
  render () {
    return <div className={style.heading}>
      <span>TEMPO</span>
    </div>
  }
}

export default connect(

)(LayoutContainer)
