import { combineReducers } from 'redux'
//import AuthReducer from './auth-reducer'
import ApplicationsReducer from './applications-reducer'
import ContactsReducer from './contacts-reducer'

const RootReducer = combineReducers( { applications: ApplicationsReducer, contacts: ContactsReducer } )

export default RootReducer
