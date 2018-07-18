import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listApplications } from '../actions/applications-actions'
import { StyleSheet, Text, View } from 'react-native';

class ApplicationIndex extends Component {
  componentDidMount() {
    //console.log('ApplicationIndex mount')
    //console.log(Object.keys(this.props))
    this.props.listApplications({  }) //this.props.auth.token
  }

  render() {

    const applicationKeys = Object.keys(this.props.applications)
    console.log(applicationKeys)
    if (applicationKeys.length === 0) {
      return (<Text>No applications</Text>)
    } else {
      return (
      <View>
        {applicationKeys.map((id) => <Text key={id}>{this.props.applications[id].first_name}</Text> )}
   </View>)
    }
  }
}




//auth: state.auth,
const mapStateToProps = (state) => ({ applications: state.applications })
const mapDispatchToProps = (dispatch) => bindActionCreators({
  listApplications
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationIndex)


// export default ApplicationIndex
