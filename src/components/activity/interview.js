import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Communications from 'react-native-communications';

class Interview extends React.Component {
  render() {
    return (
      (<View style={styles.mainContainer}>
          <View style={styles.scheduled}>
            <Text style={styles.largeText}>No Interview Scheduled</Text>
          </View>
          <View style={styles.request}>
            <Text style={styles.largeText}>Send An Interview Request:</Text>
            <View style={styles.commTypes}>
            <View style={styles.commTypes}>
              <TouchableOpacity onPress={() => Communications.text(this.props.contact.applicant.phone, 'omg I am sending this text from my app')}>
                  <Image
                   style={{ width: 45, height: 45 }}
                   source={require('../../../images/text.png')}
                  />
                  <Text style={styles.text}>Text</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>
                Communications.email([this.props.contact.applicant.email], null, null, 'Reference check', 'omg I am sending this text from my app')}>
                  <Image
                   style={{ width: 45, height: 45 }}
                   source={require('../../../images/mail.png')}
                  />
                  <Text style={styles.text}>Email</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Communications.phonecall(this.props.contact.applicant.phone, true)}>
                  <Image
                   style={{ width: 45, height: 45 }}
                   source={require('../../../images/phone.png')}
                  />
                  <Text style={styles.text}>Phone</Text>
              </TouchableOpacity>
            </View>
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
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
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
 largeText: {
   fontSize: 48,
 },
});


export default Interview
