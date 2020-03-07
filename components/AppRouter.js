import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

// Components
import Home from './Home';
import Events from './Events';
import Accomodations from './Accomodations';
import Travel from './Travel';
import Dining from './Dining';
import Registry from './Registry';

const routes = [
  {
  name: 'Home',
  component: Home,
  icon: 'ios-home'
  },
  {
  name: 'Events',
  component: Events,
  icon: 'ios-calendar'
  },
  {
  name: 'Accomodations',
  component: Accomodations,
  icon: 'ios-bed'
  },
  {
  name: 'Travel',
  component: Travel,
  icon: 'ios-airplane'
  },
  {
  name: 'Dining',
  component: Dining,
  icon: 'ios-restaurant'
  },
  {
  name: 'Registry',
  component: Registry,
  icon: "ios-gift"
  },
]

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  icon: {
    color: '#56784a',
  },
});

export default function AppRouter() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      showIcon
      tabBarOptions={{
        showIcon: true,
        showLabel: false
      }}
      style={styles.navigator}
    >
    {routes.map((route, idx) => {
      const { name, component, icon } = route;
      return(
        <Tab.Screen
          key={name + String(idx)}
          name={name}
          options={{
            tabBarIcon: () => <Icon name={icon} size={24} color={styles.icon.color} />
          }}
          component={component}
         />
      )
    })}
    </Tab.Navigator>
  );
}
