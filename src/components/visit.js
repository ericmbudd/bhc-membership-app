import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo'

import reducers from '../reducers/root-reducer'

class Visit extends React.Component {
  render() {
    //console.log(Expo)

    return (
      (<View style={styles.mainContainer}>
          <View style={styles.scheduled}>
            <Text style={{fontSize: 48}}>No Visits Scheduled</Text>
          </View>
          <View style={styles.request}>
            <Text style={{fontSize: 48}}>Send A Visit Request</Text>
            <Text style={{fontSize: 48}}>TEXT</Text>
          </View>
         </View>
    ))
  }
}


const styles = StyleSheet.create({
 mainContainer: {
    //paddingTop: Expo.Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24
 },
 scheduled: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    borderBottomColor: "#444",
    borderBottomWidth: 5,
    borderRadius: 5,
    borderStyle: 'dashed',
    height: 50,
 },
 request: {
    flex: 2,
    alignItems: "center",
    paddingTop: 30,
 },
 logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
 },
});


export default Visit
