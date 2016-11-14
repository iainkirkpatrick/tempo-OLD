import React, { PropTypes } from 'react'

import Column from './column'

import style from './style'

var people = ['Iain', 'Sarah', 'Dan', 'Michael', 'Mikey']

const Grid = React.createClass({
  render () {
    return (
      <div className={style.row}>
        {
          people.map((p) => {
            return <Column person={p} />
          })
        }
      </div>
    )
  }
})

export default Grid