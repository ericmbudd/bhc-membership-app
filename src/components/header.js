import React, { Component } from 'react'
import Expo from 'expo'

import { StyleSheet, Text, View, Image } from 'react-native';

class Header extends Component {
//<Text style={styles.header}>Test</Text>
  render() {
    let icon = ''
    switch (this.props.img) {
    case "fail":
      icon = require("../../images/states/visit.png")
      break;
    default:
      icon = require("../../images/BHC_Logo.jpg")
    }


      return (<View style={{paddingTop: Expo.Constants.statusBarHeight +20, paddingLeft: 10, flex: 1, flexDirection: 'row'}}>
        <Image
         style={{width: 65, height: 65}}
         source={icon}
       />

        <Text style={styles.header}>{this.props.headerTitle}</Text>
      </View>
)

    }
}


const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingLeft: 10,

    //height: 300,
    //backgroundColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    fontSize: 40,
  },
});


export default Header
