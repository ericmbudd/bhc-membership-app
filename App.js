import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo'


import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers/root-reducer'
import Header from './src/components/header'
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
import Application from './src/components/application'
import Activity from './src/components/activity'
import ApplicationList from './src/components/application-list'

//

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Header img="" headerTitle="BHC Membership" />,
    headerStyle: {
        paddingTop: 0, // clears the default Header margin for the status bar
        height: 100 // sets new height for the Header
      }
  }


  render() {
    //console.log(Expo)
    return (
      (<Provider store={store}>
        <View style={styles.mainContainer}>
          <View
            style={styles.contentContainer}>
            <ApplicationList navigation={this.props.navigation}

          />
          </View>
         </View>
    </Provider>)) //, document.getElementById('root')
  }
}

const RootStack = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    Activity: Activity,
  },
  {
    initialRouteName: 'HomeScreen',
  }
);



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


export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
