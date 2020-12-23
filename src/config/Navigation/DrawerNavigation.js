import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomNavigation from './BottomNavigation';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomNavigation} />
      {/* <Drawer.Screen name="Notification" component={BottomNavigation} />
      <Drawer.Screen name="About" component={BottomNavigation} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

// const DrawerHome = () => (
//   <Drawer.Navigator>
//     <Drawer.Screen name="Home" component={BottomTabNavigatorHome} />
//     <Drawer.Screen
//       name="Notification"
//       component={BottomTabNavigatorNotification}
//     />
//     <Drawer.Screen name="About" component={BottomTabNavigatorAbout} />
//   </Drawer.Navigator>
// );

// const DrawerNotification = () => (
//   <Drawer.Navigator>
//     <Drawer.Screen name="Notification" component={NotificationStack} />
//     <Drawer.Screen name="About" component={AboutStack} />
//   </Drawer.Navigator>
// );
// const DrawerAbout = () => (
//   <Drawer.Navigator>
//     <Drawer.Screen name="Notification" component={NotificationStack} />
//     <Drawer.Screen name="About" component={AboutStack} />
//   </Drawer.Navigator>
// );
