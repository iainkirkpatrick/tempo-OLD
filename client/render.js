import stack from 'dogstack'

import rootReducer from './reducer'
import rootRoute from './route'

import Stylesheet from 'stilr'

stack(document.querySelector('main'), rootReducer, rootRoute)

//HACK: stylesheet rendering with stilr until dogstack has a socket for CSS / JSS
let stylesheet = document.createElement('style');
stylesheet.textContent = Stylesheet.render();
document.head.appendChild(stylesheet);
