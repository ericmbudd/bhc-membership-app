import cloneDeep from 'lodash/cloneDeep'
import { CONTACTS_LISTED } from '../actions/contacts-actions.js'

function ContactsReducer( state = null, action ) {
  const initialState = {}

  if ( state ) {
    switch (action.type) {
      case CONTACTS_LISTED:
        const applicationsContacts = {}

        let savedAppId = action.payload[0].applications_id
        for (let i = 0; i < action.payload.length;) {
          const contactsTypes = {}
          //console.log(action.payload[i].applications_id)
          savedAppId = action.payload[i].applications_id

          while (i < action.payload.length && savedAppId == action.payload[i].applications_id ) {
            //console.log(action.payload[i])
            contactsTypes[action.payload[i].type] = action.payload[i]
            i++
          }
          applicationsContacts[savedAppId] = contactsTypes
        }

          //applicationContacts[x.applications_id] = x
          //console.log("applicationsContacts", applicationsContacts)
          return applicationsContacts

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
