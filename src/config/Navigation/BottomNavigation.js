import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {HomeStack, NotificationStack, AboutStack} from './StackNavigation';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationStack}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

// const BottomTabNavigatorHome = () => (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#fff"
//       style={{backgroundColor: 'tomato'}}>
//       <Tab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={NotificationStack}
//         options={{
//           tabBarLabel: 'Notifications',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="bell" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="About"
//         component={AboutStack}
//         options={{
//           tabBarLabel: 'About',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );

//   const BottomTabNavigatorNotification = () => (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#e91e63"
//       style={{backgroundColor: 'tomato'}}>
//       <Tab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={NotificationStack}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="bell" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="About"
//         component={AboutStack}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );

//   const BottomTabNavigatorAbout = () => (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#e91e63"
//       style={{backgroundColor: 'tomato'}}>
//       <Tab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={NotificationStack}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="bell" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="About"
//         component={AboutStack}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
