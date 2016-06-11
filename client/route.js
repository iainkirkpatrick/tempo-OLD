import React from 'react'
import { Route } from 'react-router'

import LayoutContainer from './layout/containers/layout'

export default function() {
  return <Route path='/' component={LayoutContainer}>
  </Route>
}
