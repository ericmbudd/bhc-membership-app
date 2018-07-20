import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo'


import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers/root-reducer'
import Header from './src/components/header'
import ApplicationIndex from './src/components/application-container'
import ApplicationList from './src/components/application-list'

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
            <ApplicationList />
          </View>
         </View>
    </Provider>)) //, document.getElementById('root')
  }
}

//#81af52

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
