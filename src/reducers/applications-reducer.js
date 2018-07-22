import cloneDeep from 'lodash/cloneDeep'
import { APPLICATIONS_LISTED } from '../actions/applications-actions.js'
import { CHANGE_STATE } from '../actions/change-state.js'

function ApplicationsReducer( state = null, action ) {
  const initialState = {}
  console.log("ApplicationsReducer state", state)
  console.log("ApplicationsReducer action type", action.type)

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
        //console.log("applications", applications)
        return applications

      case CHANGE_STATE:
      console.log("I'm in change state yo")
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
