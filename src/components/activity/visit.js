import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Expo from 'expo'
import Communications from 'react-native-communications';

import reducers from '../../reducers/root-reducer'


class Visit extends React.Component {
  render() {
    //console.log(Expo)
    console.log("this.props.application",this.props.application)
    return (
      (<View style={styles.mainContainer}>
          <View style={styles.scheduled}>
            <Text style={{fontSize: 48}}>No Visits Scheduled</Text>
          </View>
          <View style={styles.request}>
            <Text style={{fontSize: 48}}>Send A Visit Request</Text>
            <View style={styles.commTypes}>
            <TouchableOpacity onPress={() => Communications.text(this.props.application.phone, 'omg I am sending this text from my app')}>
              <View style={styles.holder}>
                <Image
                 style={{width: 65, height: 65}}
                 source={require("../../../images/text.png")}
               />
                <Text style={styles.text}>Text</Text>
              </View>
            </TouchableOpacity>
          </View>
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
 commTypes: {
    flex: 2,
    alignItems: "center",
    paddingTop: 50,
 },
 logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
 },
 holder: {
   flex: 0.75,
   justifyContent: 'center',
 },
 text: {
   fontSize: 32,
 },
});


export default Visit
