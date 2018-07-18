import React, { Component } from 'react'

import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {

  render() {
      return (
        <Text style={styles.header}>BHC Membership</Text>
)

    }
}


const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
  },
});


export default Header
