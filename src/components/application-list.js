import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, FlatList } from 'react-native';

import { listApplications } from '../actions/applications-actions'
import { listContacts } from '../actions/contacts-actions'
import Application from './application'

class ApplicationList extends Component {
  componentDidMount() {
    //console.log('ApplicationIndex mount')
    //console.log(Object.keys(this.props))
    this.props.listApplications({  }) //this.props.auth.token
    this.props.listContacts({  })
  }

 render() {
 const dataArray = []

 for (let key in this.props.applications) {
   this.props.applications[key].key = String(this.props.applications[key].id)
   dataArray.push(this.props.applications[key])
 }
 //console.log("this.props.applications", this.props.applications["5"])

//console.log(dataArray)


 return(
   <FlatList
     data={dataArray}
     //renderItem={({item}) => <Text>{item.first_name} {item.last_name}</Text>}
     renderItem={({item}) => <Application app={item} contact={this.props.contacts} img={item.state} navigation={this.props.navigation} />}
   />
 )
 }
}


const styles = StyleSheet.create({
  rows: {
    //flex: 1,
    backgroundColor: '#DDD',
    //alignItems: 'center',
    //justifyContent: 'center',
    fontSize: 120,
  },
});








//auth: state.auth,
const mapStateToProps = (state) => ({ applications: state.applications })
const mapDispatchToProps = (dispatch) => bindActionCreators({
  listApplications,
  listContacts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationList)


// export default ApplicationIndex
