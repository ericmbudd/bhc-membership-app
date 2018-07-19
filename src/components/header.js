import React, { Component } from 'react'

import { StyleSheet, Text, View, Image } from 'react-native';

class Header extends Component {
//<Text style={styles.header}>Test</Text>
  render() {
      return (<View style={{flex: 1, flexDirection: 'row'}}>
        <Image
         style={{width: 50, height: 50}}
         source={require('../../images/BHC_Logo.jpg')}
       />

        <Text style={styles.header}>BHC Membership</Text>
      </View>
)

    }
}


const styles = StyleSheet.create({
  header: {
    flex: 1,
    //height: 300,
    //backgroundColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
  },
});


export default Header
