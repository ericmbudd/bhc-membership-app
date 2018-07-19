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
      return (<Text style={styles.rows}>No applications</Text>)
    } else {
      return (
      <View>
        {applicationKeys.map((id) => <Text style={styles.rows} key={id}>{this.props.applications[id].first_name}</Text> )}
   </View>)
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationIndex)


// export default ApplicationIndex
