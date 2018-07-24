import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Expo from 'expo'
import Header from '../header'


class ApplicationDetail extends React.Component {

  componentWillMount(){
        const {setParams} = this.props.navigation;
        setParams({headerState: this.props.navigation.state.params.img});

  }

  static navigationOptions = ({ navigation  }) => {
          const {state} = navigation;

          let headerTitle = ''

          if(state.params != undefined){
            let str = state.params.application.state.toLowerCase().split(' ')
            for (var i = 0; i < str.length; i++) {
              str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            }
            headerTitle = str.join(' ')

              return {
                headerTitle: <Header img={state.params.headerState} headerTitle="App Details" />,
                headerStyle: {
                    paddingTop: 0, // clears the default Header margin for the status bar
                    height: 100 // sets new height for the Header
                  }
              }
          }
      }

      goBackWithData(appState) {
        //console.log("appState", appState)
        this.props.navigation.state.params.returnData(appState);
        this.props.navigation.goBack();
      }

      pickIcon (state) {
        let icon = ""
        switch (state) {
        default:
          icon = require('../../../images/application.png')
        }

        return icon
      }

  render() {


    return (
      (<ScrollView style={styles.mainContainer}>
          <View style={styles.subContainer}>
            <View style={styles.subContainer}>
            <Text style={styles.headingText}>NAME</Text>
            <Text style={styles.detailText}>{this.props.navigation.state.params.contact.applicant.first_name} {this.props.navigation.state.params.contact.applicant.last_name}</Text>
            <Text style={styles.headingText}>MOVE-IN DATE</Text>
            <Text style={styles.detailText}>{this.props.navigation.state.params.application.move_in_date.substring(0,10)}</Text>
            <Text style={styles.headingText}>CITY/STATE</Text>
            <Text style={styles.detailText}>{this.props.navigation.state.params.application.current_city}, {this.props.navigation.state.params.application.current_state}</Text>
            <Text style={styles.headingText}>BIRTHDAY</Text>
            <Text style={styles.detailText}>{this.props.navigation.state.params.application.birth_date.substring(0,10)}</Text>
            <Text style={styles.headingText}>CURRENTLY A STUDENT?</Text>
            <Text style={styles.detailText}>{this.props.navigation.state.params.application.student}</Text>
            <Text style={styles.headingText}>WHAT GENDER PRONOUNS DO YOU PREFER?</Text>
            <Text style={styles.detailText}>{this.props.navigation.state.params.application.pronouns}</Text>
            <Text style={styles.headingText}>DO YOU OWN A VEHICLE?</Text>
            <Text style={styles.detailText}>{this.props.navigation.state.params.application.vehicle ? "Yes" : "No"}</Text>
            <Text style={styles.headingText}>DO YOU HAVE ANY CHILDREN?</Text>
            <Text style={styles.detailText}>{this.props.navigation.state.params.application.children}</Text>
            <Text style={styles.headingText}>{this.props.navigation.state.params.application.bhc_questions['1'].question.toUpperCase()}</Text>
            <Text style={styles.detailText}>{this.props.navigation.state.params.application.bhc_questions['1'].answer}</Text>
            <Text style={styles.headingText}>{this.props.navigation.state.params.application.bhc_questions['2'].question.toUpperCase()}</Text>
            <Text style={styles.detailText}>{this.props.navigation.state.params.application.bhc_questions['2'].answer}</Text>
            <Text style={styles.headingText}>{this.props.navigation.state.params.application.bhc_questions['3'].question.toUpperCase()}</Text>
            <Text style={styles.detailText}>{this.props.navigation.state.params.application.bhc_questions['3'].answer}</Text>

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
    paddingLeft: 10,
    paddingTop: 10,
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


export default ApplicationDetail
