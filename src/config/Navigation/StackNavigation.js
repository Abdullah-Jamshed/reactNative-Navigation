import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../../screens/Home';
import About from '../../screens/About';
import Notifications from '../../screens/Notifications';

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

const AboutStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="About"
      component={About}
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

const NotificationStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Notification"
      component={Notifications}
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

export {HomeStack, NotificationStack, AboutStack};

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
