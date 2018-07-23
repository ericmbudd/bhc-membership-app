const CONTACTS_LISTED = 'CONTACTS_LISTED'

const listContacts = () => {
  const url = `https://bhc-server.herokuapp.com/contacts`


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
      console.log("result", result)
      dispatch({ type: CONTACTS_LISTED, payload: result })
    })
    .catch((err) => {console.log('err', err)})
  }
}

export {
  CONTACTS_LISTED,
  listContacts
}
