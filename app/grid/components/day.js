import React, { PropTypes } from 'react'

import style from '../styles/day'

const Day = React.createClass({
  getInitialState (props) {
    return {
      active: false
    }
  },

  render () {
    return (
      <div
        onClick={() => { this.setState({ active: !this.state.active })}}
        className={this.state.active ? style.dayCellActive : style.dayCellInactive}
      >

      </div>
    )
  }
})

export default Day
