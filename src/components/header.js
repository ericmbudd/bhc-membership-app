import React, { Component } from 'react'

import { StyleSheet, Text, View, Image } from 'react-native';

class Header extends Component {
//<Text style={styles.header}>Test</Text>
  render() {
      return (<View style={{paddingLeft: 10, flex: 1, flexDirection: 'row'}}>
        <Image
         style={{width: 65, height: 65}}
         source={require('../../images/BHC_Logo.jpg')}
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
    fontSize: 40,
  },
});


export default Header
