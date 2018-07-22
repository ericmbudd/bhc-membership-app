import cloneDeep from 'lodash/cloneDeep'

const CHANGE_STATE = 'CHANGE_STATE'

const changeState = (id, applications) => {
  //console.log("this.props", this.props)
  //const result = cloneDeep(this.state.applications)


  return (dispatch) =>
    dispatch({
        type: CHANGE_STATE,
        payload: result
      })
}

export {
  CHANGE_STATE,
  changeState
}
