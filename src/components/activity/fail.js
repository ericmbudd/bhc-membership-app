import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class Fail extends React.Component {
  render() {
    return (
      (<View style={styles.mainContainer}>
            <Text style={styles.largeText}>OH NOES!</Text>
       </View>
    ))
  }
}


const styles = StyleSheet.create({
 mainContainer: {
    //paddingTop: Expo.Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24,
    alignItems: 'center',
 },
 largeText: {
   fontSize: 96,
 },
});


export default Fail
