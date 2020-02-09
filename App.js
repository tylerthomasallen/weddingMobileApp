import React, { Component } from 'react';

// Components
import AppRouter from './components/AppRouter';
import { Text, View, 
StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    color: 'red',
  },
});

class HelloWorldApp extends Component {
  render() {
    return (
      <ScrollView>
        <AppRouter />
      </ScrollView>
    );
  }
}

export default HelloWorldApp;
