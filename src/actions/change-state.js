import cloneDeep from 'lodash/cloneDeep'

const CHANGE_STATE = 'CHANGE_STATE'


const changeState = (id, application, appState) => dispatch => {
  console.log("id", id)
  //console.log("application", application)
 const result = cloneDeep(application)

  result.state = appState

  //console.log("updated application", result)

  return dispatch({
        type: CHANGE_STATE,
        id: id,
        payload: result
      })
}

export {
  CHANGE_STATE,
  changeState
}
