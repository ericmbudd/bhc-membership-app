import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Expo from 'expo'
import Communications from 'react-native-communications';

import reducers from '../../reducers/root-reducer'


class References extends React.Component {
  render() {

    const referenceText = `
Hi ${this.props.contact.personal1.first_name},

I'm sending an email to you because ${this.props.contact.personal1.first_name} ${this.props.contact.personal1.last_name} listed you as a rental reference. ${this.props.contact.personal1.first_name} is applying to our housing cooperative in Boulder, Colorado, USA. Could you answer a few questions for me? Thanks!

- What is your relationship to the person?
- How long have you known the person?
- Tell me a little bit about the applicant’s character.
- Would you recommend this person as a tenant to a landlord?

Thank you,
Masala Co-op Membership Coordinator
`

    return (
      (<View style={styles.mainContainer}>
          <View style={styles.reference}>
            <Text style={styles.largeText}>PERSONAL REFERENCE 1</Text>
            <Text style={styles.text}> {this.props.contact.personal1.first_name} {this.props.contact.personal1.last_name}</Text>
            <View style={styles.commContainer}>
            <TouchableOpacity onPress={() => Communications.text(this.props.contact.personal1.phone, 'omg I am sending this text from my app')}>
                <Image
                 style={{ width: 45, height: 45 }}
                 source={require('../../../images/text.png')}
                />
                <Text style={styles.text}>Text</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Communications.email([this.props.contact.personal1.email], null, null,
              `Reference request for ${this.props.contact.applicant.first_name} ${this.props.contact.applicant.last_name}`, referenceText)}>
                <Image
                 style={{ width: 45, height: 45 }}
                 source={require('../../../images/mail.png')}
                />
                <Text style={styles.text}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Communications.phonecall(this.props.contact.personal1.phone, true)}>
                <Image
                 style={{ width: 45, height: 45 }}
                 source={require('../../../images/phone.png')}
                />
                <Text style={styles.text}>Phone</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.reference}>
            <Text style={styles.largeText}>PERSONAL REFERENCE 2</Text>
            <Text style={styles.text}> {this.props.contact.personal2.first_name} {this.props.contact.personal2.last_name}</Text>
            <View style={styles.commContainer}>
            <TouchableOpacity onPress={() => Communications.text(this.props.contact.personal2.phone, 'omg I am sending this text from my app')}>
                <Image
                 style={{ width: 45, height: 45 }}
                 source={require('../../../images/text.png')}
                />
                <Text style={styles.text}>Text</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Communications.email([this.props.contact.personal2.email], null, null, 'Reference check', 'omg I am sending this text from my app')}>
                <Image
                 style={{ width: 45, height: 45 }}
                 source={require('../../../images/mail.png')}
                />
                <Text style={styles.text}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Communications.phonecall(this.props.contact.personal2.phone, true)}>
                <Image
                 style={{ width: 45, height: 45 }}
                 source={require('../../../images/phone.png')}
                />
                <Text style={styles.text}>Phone</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.referenceBottom}>
            <Text style={styles.largeText}>RENTAL REFERENCE 1</Text>
            <Text style={styles.text}> {this.props.contact.rental1.first_name} {this.props.contact.rental1.last_name}</Text>
            <View style={styles.commContainer}>
            <TouchableOpacity onPress={() => Communications.text(this.props.contact.rental1.phone, 'omg I am sending this text from my app')}>
                <Image
                 style={{ width: 45, height: 45 }}
                 source={require('../../../images/text.png')}
                />
                <Text style={styles.text}>Text</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Communications.email([this.props.contact.rental1.email], null, null, 'Reference check', 'omg I am sending this text from my app')}>
                <Image
                 style={{ width: 45, height: 45 }}
                 source={require('../../../images/mail.png')}
                />
                <Text style={styles.text}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Communications.phonecall(this.props.contact.rental1.phone, true)}>
                <Image
                 style={{ width: 45, height: 45 }}
                 source={require('../../../images/phone.png')}
                />
                <Text style={styles.text}>Phone</Text>
            </TouchableOpacity>
          </View>
          </View>
         </View>
    ))
  }
}


const styles = StyleSheet.create({
center: {
  justifyContent: 'space-evenly',
},
 mainContainer: {
    //paddingTop: Expo.Constants.statusBarHeight,
    paddingLeft: 50,
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24
 },
 commContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24,
 },
 reference: {
    flex: 2,
    //alignItems: "center",
    paddingTop: 0,
    borderBottomColor: "#444",
    borderBottomWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    //height: 50,
    width: 400
 },
 referenceBottom: {
    flex: 2,
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
   fontSize: 24,
   fontWeight: "bold"
 },
});


export default References
