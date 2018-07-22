import { APPLICATIONS_LISTED } from '../actions/applications-actions.js'
import { CHANGE_STATE } from '../actions/change-state.js'

function ApplicationsReducer( state = null, action ) {
  const initialState = {}

  if ( state ) {
    switch ( action.type ) {
      case APPLICATIONS_LISTED:
        const applications = action.payload.reduce( ( acc, x ) => {
          const newObj = {
            ...acc
          }
          newObj[ x.id ] = x

          return newObj
        }, {} )
        console.log("applications", applications)
        return applications

      case CHANGE_STATE:
        return { ...state, all: action.payload }

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
