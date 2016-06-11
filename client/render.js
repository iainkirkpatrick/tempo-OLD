import stack from 'dogstack'

import rootReducer from './reducer'
import rootRoute from './route'

stack(document.querySelector('main'), rootReducer, rootRoute)
