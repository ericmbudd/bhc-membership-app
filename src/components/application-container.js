import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { listApplications } from '../actions/applications-actions'
import { StyleSheet, Text, View } from 'react-native';

class ApplicationIndex extends Component {
  componentDidMount() {
    console.log('ApplicationIndex mount')
    console.log(Object.keys(this.props))
    this.props.listApplications({  }) //this.props.auth.token
  }

  render() {
    return <Text>bleh</Text>
    // const applicationKeys = Object.keys(this.props.applications)
    // console.log(applicationKeys)
    // if (applicationKeys.length === 0) {
    //   return <Text>No applications</Text>
    // } else {
    //   return (<div>
    //     <h1>Applications</h1>
    //     <p>...do not knock out your to do list, call it stupid!</p>
    //     {applicationKeys.map((id) => <p key={id}>{this.props.applications[id].item}</p>)}
    //   </div>)
    // }
  }
}

// const ApplicationIndex = () =>{
//   return <Text>Hello</Text>
// }

//auth: state.auth,
const mapStateToProps = (state) => ({ applications: state.applications })
const mapDispatchToProps = (dispatch) => bindActionCreators({
  listApplications
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationIndex)


// export default ApplicationIndex
