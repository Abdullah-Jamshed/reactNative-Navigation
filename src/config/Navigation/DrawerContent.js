import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Text, Paragraph, Caption, Avatar, Drawer} from 'react-native-paper';

// const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView>
        <View style={[styles.userInfoSection, styles.row]}>
          <View style={{marginRight: 10}}>
            {/* <Avatar.Image
              size={60}
              source={{
                // uri:'https://lh3.googleusercontent.com/proxy/vYW0ywk_se7A__NBSJIFTT1S0_9V3SFrOk-UxiQJIJxWG0GcY1g1y9pG7O9YK-7g76jx7JNrKTiOopdeiUuLx8C-HzCbr-i-FcsrCnj3cX7jz2uAzA',
              }}
            /> */}
          </View>
          <View>
            <Text style={styles.title}>Name</Text>
            <Caption style={styles.caption}>@userid</Caption>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item
          icon={({color, size}) => (
            <Icon name="enter-to-app" size={size} color={color} />
          )}
          label="First Item"
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
