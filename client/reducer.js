import { combineReducers } from 'redux'
//this dep should be removed in future dogstack
//this will be a combination of sub-app reducers only, routing handled by stack
import { routerReducer } from 'react-router-redux'


export default combineReducers({
  routing: routerReducer
})
