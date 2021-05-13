import {createStore, combineReducers} from 'redux'
import authReducer from './authReducer'


// Here we combine reducers, the way our redux store gets set
// up will be slightly different if we use combineReducers vs if
// we do not so make sure to console log your values to check if
// you aren't really sure.
const rootReducer = combineReducers({
  authReducer: authReducer
})

export default createStore(rootReducer)

// Go to ../index.js to attach our store to the Provider.