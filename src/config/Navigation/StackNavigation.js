import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Support from '../../screens/Support';
import Setting from '../../screens/Setting';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        // headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          paddingHorizontal: 20,
        },
        headerStyle: {
          backgroundColor: '#dfdfdf',
        },
        headerLeft: () => (
          <Feather
            size={26}
            name="menu"
            color="#000"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        // headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          paddingHorizontal: 20,
        },
        headerStyle: {
          backgroundColor: '#dfdfdf',
        },
        headerLeft: () => (
          <Feather
            size={26}
            name="menu"
            color="#000"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const SupportStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Support"
      component={Support}
      options={{
        // headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          paddingHorizontal: 20,
        },
        headerStyle: {
          backgroundColor: '#dfdfdf',
        },
        headerLeft: () => (
          <Feather
            size={26}
            name="menu"
            color="#000"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);
const SettingStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Setting"
      component={Setting}
      options={{
        // headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          paddingHorizontal: 20,
        },
        headerStyle: {
          backgroundColor: '#dfdfdf',
        },
        headerLeft: () => (
          <Feather
            size={26}
            name="menu"
            color="#000"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

export {HomeStack, ProfileStack, SupportStack, SettingStack};

// const StackNavigation = () => {
//   return (
//     <Stack.Navigator
//       color="#ddd"
//       size={26}
//       options={{
//         headerLeft: (props) => (
//           <Feather
//             name="menu"
//             onPress={() => {
//               // Do something
//             }}
//           />
//         ),
//       }}>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="About" component={About} />
//       <Stack.Screen name="Notification" component={Notifications} />
//     </Stack.Navigator>
//   );
// };

// export default StackNavigation;
