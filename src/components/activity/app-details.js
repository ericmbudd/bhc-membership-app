import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Expo from 'expo'
import Communications from 'react-native-communications';

import reducers from '../../reducers/root-reducer'


class Interview extends React.Component {


  render() {


    return (
      (<ScrollView style={styles.mainContainer}>
          <View style={styles.subContainer}>
            <View style={styles.subContainer}>
            <Text style={styles.headingText}>NAME</Text>
            <Text style={styles.detailText}>{this.props.contact.applicant.first_name} {this.props.contact.applicant.last_name}</Text>
            <Text style={styles.headingText}>MOVE-IN DATE</Text>
            <Text style={styles.detailText}>{this.props.application.move_in_date.substring(0,10)}</Text>
            <Text style={styles.headingText}>CITY/STATE</Text>
            <Text style={styles.detailText}>{this.props.application.current_city}, {this.props.application.current_state}</Text>
            <Text style={styles.headingText}>BIRTHDAY</Text>
            <Text style={styles.detailText}>{this.props.application.birth_date.substring(0,10)}</Text>
            <Text style={styles.headingText}>CURRENTLY A STUDENT?</Text>
            <Text style={styles.detailText}>{this.props.application.student}</Text>
            <Text style={styles.headingText}>WHAT GENDER PRONOUNS DO YOU PREFER?</Text>
            <Text style={styles.detailText}>{this.props.application.pronouns}</Text>
            <Text style={styles.headingText}>DO YOU OWN A VEHICLE?</Text>
            <Text style={styles.detailText}>{this.props.application.vehicle ? "Yes" : "No"}</Text>
            <Text style={styles.headingText}>DO YOU HAVE ANY CHILDREN?</Text>
            <Text style={styles.detailText}>{this.props.application.children}</Text>
            <Text style={styles.headingText}>{this.props.application.bhc_questions['1'].question.toUpperCase()}</Text>
            <Text style={styles.detailText}>{this.props.application.bhc_questions['1'].answer}</Text>
            <Text style={styles.headingText}>{this.props.application.bhc_questions['2'].question.toUpperCase()}</Text>
            <Text style={styles.detailText}>{this.props.application.bhc_questions['2'].answer}</Text>
            <Text style={styles.headingText}>{this.props.application.bhc_questions['3'].question.toUpperCase()}</Text>
            <Text style={styles.detailText}>{this.props.application.bhc_questions['3'].answer}</Text>

          </View>
          </View>
        </ScrollView>
    ))
  }
}


const styles = StyleSheet.create({
 mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
 },
 subContainer: {
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#F5FCFF',
 },
 headingText: {
   fontSize: 24,
   fontWeight: 'bold',
 },
 detailText: {
   fontSize: 24,
   marginBottom: 25
 },
})


export default Interview
