import cloneDeep from 'lodash/cloneDeep'

const CHANGE_STATE = 'CHANGE_STATE'

const changeState = (id) => dispatch => {
const result = cloneDeep(this.state.applications)
console.log("this.state.applications", this.state.applications)

  return dispatch({
        type: CHANGE_STATE,
        payload: result
      })
}

export {
  CHANGE_STATE,
  changeState
}
