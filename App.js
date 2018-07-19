import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo'


import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers/root-reducer'
import Header from './src/components/header'
import ApplicationIndex from './src/components/application-container'

//

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

export default class App extends React.Component {

  render() {
    //console.log(Expo)
    return (
      (<Provider store={createStoreWithMiddleware(reducers)}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
           <Header />
           <View style={styles.leftHeaderContainer}>
           </View>
           <View style={styles.rightHeaderContainer}>
           </View>
          </View>
          <View style={styles.contentContainer}>
          </View>
         </View>
    </Provider>)) //, document.getElementById('root')
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
    backgroundColor: "#81af52",
    alignItems:"center",
    paddingRight: 5
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
    flex: 6,
 },
 logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
 },
});
