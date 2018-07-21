import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Expo from 'expo'

import reducers from '../../reducers/root-reducer'
import Header from '../header'
import Visit from './visit'

import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import { withNavigation } from 'react-navigation';

class Activity extends React.Component {

  componentWillMount(){
        const {setParams} = this.props.navigation;
        setParams({headerState: this.props.navigation.state.params.appState});

}

static navigationOptions = ({ navigation  }) => {
        const {state} = navigation;

        let headerTitle = ''

        if(state.params != undefined){
          let str = state.params.appState.toLowerCase().split(' ')
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

    };

  render() {
    return (
      <View style={styles.mainContainer}>
  <View style={styles.contentContainer}>
    <Visit />
  </View>
  <View style={styles.footerContainer}>
   <View style={styles.leftFooterContainer}>
     <Text>Left</Text>
   </View>
   <View style={styles.rightFooterContainer}>
     <Image
      style={{width: 65, height: 65}}
      source={require("../../../images/states/references.png")}
    />
    <Text style={{fontSize: 48}}>➡</Text>
   </View>
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
   backgroundColor: "#fff"
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


export default Activity
