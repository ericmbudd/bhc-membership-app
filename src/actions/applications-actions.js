const APPLICATIONS_LISTED = 'APPLICATIONS_LISTED'

const listApplications = ( { token } ) => {
  const url = `${ process.env.REACT_APP_API_URL }/applications`


  console.log(process.env.REACT_APP_API_URL)
  const opts = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      //'Authorization': `Bearer ${ token }`
    }
  }

  return( dispatch ) => {
    fetch( url, opts ).then( ( result ) => result.json() ).then( ( result ) => {
      dispatch( { type: APPLICATIONS_LISTED, payload: result } )
    } )
  }
}

export {
  APPLICATIONS_LISTED,
  listApplications
}
