import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { StyleSheet, Text, View, Image, Icon } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Activity from './activity'

class Application extends Component {

 render() {


 return (
   <View style = {styles.listItemContainer}>
    <View style= {styles.iconContainer}>
     <Image source={require('../../images/states/fail.png')} style={styles.initStyle} resizeMode='contain' />
    </View>
    <View style = {styles.callerDetailsContainer}>
     <View style={styles.callerDetailsContainerWrap}>
      <View style={styles.nameContainer}>
        <Text onPress={() => this.props.navigation.navigate('Activity')}
          >{this.props.app.first_name} {this.props.app.last_name}</Text>
        <View style={styles.dateContainer}>

          <Text style={{ fontWeight:'400', color:'#666', fontSize:12 }}>{this.props.app.current_city}, {this.props.app.current_state}</Text>
        </View>
       </View>
     <View style={styles.callIconContainer}>

     </View>
    </View>
   </View>
  </View>
  )
 }
}

const RootStack = createStackNavigator(
  {
    Application: Application,
    Activity: Activity,
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  callerDetailsContainer: {
    flex: 4,
    justifyContent: "center",
    borderBottomColor: "rgba(92,94,94,0.5)",
    borderBottomWidth: 0.25
  },
  callerDetailsContainerWrap: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  nameContainer: {
    alignItems: "flex-start",
    flex: 1
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  callIconContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  initStyle: {
    borderRadius: 30,
    width: 60,
    height: 60
  }
})





//auth: state.auth,
// const mapStateToProps = (state) => ({ applications: state.applications })
// const mapDispatchToProps = (dispatch) => bindActionCreators({
//
// }, dispatch)

//export default connect(mapStateToProps, mapDispatchToProps)(Application)

export default Application
