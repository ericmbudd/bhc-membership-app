import cloneDeep from 'lodash/cloneDeep'
import { CONTACTS_LISTED } from '../actions/contacts-actions.js'

function ContactsReducer( state = null, action ) {
  const initialState = {}
  //console.log("ContactsReducer state", state)
  //console.log("ContactsReducer action type", action.type)

console.log("contacts reducer")

  if ( state ) {
    switch ( action.type ) {
      case CONTACTS_LISTED:
        const contacts = action.payload.reduce( ( acc, x ) => {
          const newObj = {
            ...acc
          }
          newObj[ x.id ] = x

          return newObj
        }, {} )
        return contacts
      default:
        return state

    }
  } else {
    return {
      ...initialState
    }
  }
}

export default ContactsReducer
