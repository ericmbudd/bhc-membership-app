import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Expo from 'expo'
import Communications from 'react-native-communications';

import reducers from '../../reducers/root-reducer'


class References extends React.Component {
  render() {
    //console.log(Expo)

    // <View style={styles.request}>
    //   <Text style={styles.largeText}>{this.props.contact.applicant.first_name}</Text>
    //   <View style={styles.commTypes}>

    // </View>
    // </View>

    console.log("References this.props",this.props)
    return (
      (<View style={styles.mainContainer}>
          <View style={styles.reference}>
            <Text style={styles.largeText}>Personal Reference 1</Text>
            <Text style={styles.text}> {this.props.contact.personal1.first_name} {this.props.contact.personal1.last_name}</Text>
            <TouchableOpacity onPress={() => Communications.text(this.props.application.phone, 'omg I am sending this text from my app')}>
                <Image
                 style={{ width: 45, height: 45 }}
                 source={require('../../../images/text.png')}
                />
                <Text style={styles.text}>Text</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.reference}>
            <Text style={styles.largeText}>Personal Reference 2</Text>
            <Text style={styles.text}> {this.props.contact.personal1.first_name} {this.props.contact.personal1.last_name}</Text>
          </View>
          <View style={styles.reference}>
            <Text style={styles.largeText}>Rental Reference 1</Text>
            <Text style={styles.text}> {this.props.contact.personal1.first_name} {this.props.contact.personal1.last_name}</Text>
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
 reference: {
    flex: 2,
    //alignItems: "center",
    paddingTop: 0,
    borderBottomColor: "#444",
    borderBottomWidth: 5,
    borderRadius: 5,
    borderStyle: 'dashed',
    //height: 50,
    width: 400
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
   fontSize: 24,
 },
 largeText: {
   fontSize: 32,
 },
});


export default References
