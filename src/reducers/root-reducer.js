import { combineReducers } from 'redux'
import AuthReducer from './auth-reducer'
import ApplicationsReducer from './applications-reducer'

const RootReducer = combineReducers( { applications: ApplicationsReducer } )

export default RootReducer
