import { APPLICATIONS_LISTED } from '../actions/applications-actions.js'

function ApplicationsReducer( state = null, action ) {
  const initialState = {}

  if ( state ) {
    switch ( action.type ) {
      case APPLICATIONS_LISTED:
        const todos = action.payload.applications.reduce( ( acc, x ) => {
          const newObj = {
            ...acc
          }
          newObj[ x.id ] = x
          return newObj
        }, {} )
        return todos
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
