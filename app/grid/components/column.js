import React, { PropTypes } from 'react'
import moment from 'moment'
require('moment-range')

import Day from './day'

import style from '../styles/column'

// probably bad manipulation of moment objects
var now = moment()
var twoWeeksAhead = moment().add(2, 'weeks')
var nextTwoWeeks = moment.range(now, twoWeeksAhead).toArray('days')
console.log(nextTwoWeeks)

const Column = React.createClass({
  render () {
    return (
      <div className={style.gridColumn}>
        <h4>{this.props.person}</h4>
        {
          nextTwoWeeks.map((d) => {
            return <Day date={d} />
          })
        }
      </div>
    )
  }
})

export default Column
