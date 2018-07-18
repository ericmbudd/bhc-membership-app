import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers/root-reducer'
import ApplicationIndex from './src/components/application-container'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)


// <ApplicationIndex />
export default class App extends React.Component {
  render() {
    return (
      (<Provider store={createStoreWithMiddleware(reducers)}>
      <View style={styles.container}>
        <ApplicationIndex />
        <Text>Open up App.js to start working on your app, yo!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

      </View>
    </Provider>)) //, document.getElementById('root')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
