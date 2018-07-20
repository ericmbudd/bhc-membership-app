import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo'

import reducers from '../reducers/root-reducer'
import Header from './header'

import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


class Activity extends React.Component {

  render() {
    //console.log(Expo)
    return (
      (<View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
           <Header headerTitle="Visit" />
           <View style={styles.leftHeaderContainer}>
           </View>
           <View style={styles.rightHeaderContainer}>
           </View>
          </View>
          <View style={styles.contentContainer}>
            <Text>Test</Text>
          </View>
         </View>
    ))
  }
}


const styles = StyleSheet.create({
 mainContainer: {
    paddingTop: Expo.Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24
 },
 headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems:"center",
    paddingRight: 5,
    borderBottomColor: "#81af52",
    borderBottomWidth: 6,
 },
 leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row"
 },
 rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row"
 },
 contentContainer: {
    flex: 7,
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