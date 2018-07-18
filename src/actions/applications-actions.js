const APPLICATIONS_LISTED = 'APPLICATIONS_LISTED'

const listApplications = () => {
  const url = `https://bhc-server.herokuapp.com/applications`


  console.log('url', url)
  const opts = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      //'Authorization': `Bearer ${ token }`
    }
  }

  return(dispatch) => {
    fetch(url, opts)
    .then((result) => result.json())
    .then((result) => {
      dispatch({ type: APPLICATIONS_LISTED, payload: result })
    })
    .catch((err) => {console.log('err', err)})
  }
}

export {
  APPLICATIONS_LISTED,
  listApplications
}
