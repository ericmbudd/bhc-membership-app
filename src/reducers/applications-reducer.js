import { APPLICATIONS_LISTED } from '../actions/applications-actions.js'

function ApplicationsReducer( state = null, action ) {
  const initialState = {}

  if ( state ) {
    switch ( action.type ) {
      case APPLICATIONS_LISTED:
      console.log("action.payload", action.payload)
        const applications = action.payload.reduce( ( acc, x ) => {
          const newObj = {
            ...acc
          }
          newObj[ x.id ] = x
          return newObj
        }, {} )
        return applications
      default:
        return state
    }
  } else {
    return {
      ...initialState
    }
  }
}

export default ApplicationsReducer
