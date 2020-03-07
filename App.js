import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './components/AppRouter';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <AppRouter />
     </NavigationContainer>
    </SafeAreaView>
  );
}
