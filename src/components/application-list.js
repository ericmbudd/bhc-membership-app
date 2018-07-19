import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listApplications } from '../actions/applications-actions'
import { StyleSheet, Text, View, Flatlist } from 'react-native';

class ApplicationList extends Component {
  componentDidMount() {
    //console.log('ApplicationIndex mount')
    //console.log(Object.keys(this.props))
    this.props.listApplications({  }) //this.props.auth.token
  }

 render() {
 return (
   <FlatList
     data={[{key: 'a'}, {key: 'b'}]}
     renderItem={({item}) => <Text>{item.key}</Text>}
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
