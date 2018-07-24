import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Expo from 'expo'
import Communications from 'react-native-communications';

import reducers from '../../reducers/root-reducer'


class Visit extends React.Component {

  render() {
    const visitText = `
Hi ${this.props.contact.personal1.first_name}, thanks for applying to Ingram! Please pick a time to meet the Ingram Co-op.

https://docs.google.com/forms/d/e/1FAIpQLScI7zlQTEbhYA7pHuAfymNzBamj_dEBe1m4ZqW9TZqYZwOucw/viewform?entry.1111365971=${this.props.contact.applicant.first_name}+${this.props.contact.applicant.last_name}&entry.514779411=${this.props.contact.applicant.email}

Thank you,
Ingram Co-op Membership Coordinator
  `


    return (
      (<View style={styles.mainContainer}>
          <View style={styles.scheduled}>
            <Text style={styles.largeText}>No Visits Scheduled</Text>
          </View>
          <View style={styles.request}>
            <Text style={styles.largeText}>Send A Visit Request:</Text>
            <View style={styles.commTypes}>
            <View style={styles.commTypes}>
              <TouchableOpacity onPress={() => Communications.text(this.props.contact.applicant.phone, visitText)}>
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
    justifyContent: 'space-evenly',
    paddingTop: 30,
 },
 commTypes: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 0,
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


export default Visit
