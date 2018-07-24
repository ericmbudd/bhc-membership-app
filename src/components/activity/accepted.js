import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class Accepted extends React.Component {
  render() {
    return (
      (<View style={styles.mainContainer}>
            <Text style={styles.largeText}>YAY!</Text>
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


export default Accepted
