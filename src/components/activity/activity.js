import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Expo from 'expo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  APP_STATE_TABLE,
} from '../../constants'

import reducers from '../../reducers/root-reducer'
import Header from '../header'
import Visit from './visit'
import References from './references'
import ActivityComponent from './component-list'

import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { withNavigation } from 'react-navigation';


class Activity extends React.Component {

  componentWillMount(){
        const {setParams} = this.props.navigation;
        setParams({headerState: this.props.navigation.state.params.application.state});

}

static navigationOptions = ({ navigation  }) => {
        const {state} = navigation;

        let headerTitle = ''

        if(state.params != undefined){
          let str = state.params.application.state.toLowerCase().split(' ')
          for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
          }
          headerTitle = str.join(' ')

            return {
              headerTitle: <Header img={state.params.headerState} headerTitle={headerTitle} />,
              headerStyle: {
                  paddingTop: 0, // clears the default Header margin for the status bar
                  height: 100 // sets new height for the Header
                }
            }
        }

    }

    goBackWithData(appState) {
      //console.log("appState", appState)
      this.props.navigation.state.params.returnData(appState);
      this.props.navigation.goBack();
    }

    pickIcon (state) {
      let icon = ""
      switch (state) {
      case "fail":
        icon = require('../../../images/states/fail.png')
        break
      case 'visit':
        icon = require('../../../images/states/visit.png')
        break
      case 'references':
        icon = require('../../../images/states/references.png')
        break
      case 'interview':
        icon = require('../../../images/states/interview.png')
        break
      case 'accepted':
        icon = require('../../../images/states/accepted.png')
        break
      default:
        icon = require('../../../images/BHC_Logo.jpg')
      }

      return icon
    }



  render() {
    console.log('activity contact', this.props.navigation.state.params.contact)
    const nextState = APP_STATE_TABLE[this.props.navigation.state.params.application.state]['next']
    const prevState = APP_STATE_TABLE[this.props.navigation.state.params.application.state]['prev']
    const nextStateIcon = this.pickIcon(APP_STATE_TABLE[this.props.navigation.state.params.application.state]['next'])
    const prevStateIcon = this.pickIcon(APP_STATE_TABLE[this.props.navigation.state.params.application.state]['prev'])

    //console.log("this.props.img", this.props.img)
    //console.log(const ComponentName = APP_STATE_TABLE[this.props.navigation.state.params.application.state]['component'])


    return (
      <View style={styles.mainContainer}>
  <View style={styles.contentContainer}>
    <ActivityComponent
      tag={this.props.navigation.state.params.application.state}
      application={this.props.navigation.state.params.application}
      contact={this.props.navigation.state.params.contact}
    />
  </View>
  <View style={styles.footerContainer}>
<TouchableOpacity onPress={() => this.goBackWithData(prevState)}>
   <View style={styles.leftFooterContainer}>
     <Text style={{fontSize: 48}}>←</Text>
     <Image
      style={{width: 65, height: 65}}
      source={prevStateIcon}
    />
   </View>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.goBackWithData(nextState)}>
   <View style={styles.rightFooterContainer}>
     <Image
      style={{width: 65, height: 65}}
      source={nextStateIcon}
    />
    <Text style={{fontSize: 48}}>→</Text>
   </View>
</TouchableOpacity>
  </View>
 </View>
    )
  }
}


const styles = StyleSheet.create({
 mainContainer: {
    //paddingTop: Expo.Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24
 },
 footerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    //paddingRight: 5,
    borderBottomColor: "#81af52",
    borderBottomWidth: 6,
    backgroundColor: "#81af52",
 },
 leftFooterContainer: {
   alignItems: "flex-start",
   flexDirection: "row",
   backgroundColor: "#fff",
   alignItems:"center",
   height: 150,
   marginRight: 10,
   paddingRight: 5,
   paddingLeft: 10,
},
rightFooterContainer: {
   alignItems: "flex-end",
   flexDirection: "row",
   backgroundColor: "#fff",
   alignItems:"center",
   height: 150,
   marginLeft: 10,
   paddingLeft: 5,
   paddingRight: 10,
},
 contentContainer: {
    flex: 6,
    alignItems: "center",
    paddingTop: 30,
    borderBottomColor: "#444",
    borderBottomWidth: 5,
    borderRadius: 5,
    borderStyle: 'dashed',
 },
 logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
 },
});


// const mapStateToProps = (state) => ({ applications: state.applications })
//
//
// const mapDispatchToProps = (dispatch) => bindActionCreators({
// changeState
// }, dispatch)
//
// export default connect(mapStateToProps, mapDispatchToProps)(Activity)
//

export default Activity
