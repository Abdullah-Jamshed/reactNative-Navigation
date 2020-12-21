import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import About from './src/screens/About';
import Notifications from './src/screens/Notifications';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Header = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator
        initialRouteName="About"
        barStyle={{backgroundColor: '#694fad'}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator> */}

      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        style={{backgroundColor: 'tomato'}}>
        <Tab.Screen
          name="Home"
          component={Header}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
