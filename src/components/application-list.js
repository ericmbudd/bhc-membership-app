import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { listApplications } from '../actions/applications-actions'
import Application from './application'
import { withNavigation } from 'react-navigation';

class ApplicationList extends Component {
  componentDidMount() {
    //console.log('ApplicationIndex mount')
    //console.log(Object.keys(this.props))
    this.props.listApplications({  }) //this.props.auth.token
  }

 render() {
 const applicationKeys = Object.keys(this.props.applications)

 let dataArray = []

 for (let key in this.props.applications) {
   this.props.applications[key].key = String(this.props.applications[key].id)
   dataArray.push(this.props.applications[key])
 }

console.log(dataArray)


 return(
   <FlatList
     data={dataArray}
     //renderItem={({item}) => <Text>{item.first_name} {item.last_name}</Text>}
     renderItem={({item}) => <Application app={item} navigation={this.props.navigation} />}
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
  listApplications
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationList)


// export default ApplicationIndex
