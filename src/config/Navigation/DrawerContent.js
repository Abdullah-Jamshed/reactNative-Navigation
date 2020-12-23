import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {
  Text,
  Paragraph,
  Caption,
  Avatar,
  Drawer,
  TouchableRipple,
} from 'react-native-paper';
import {Switch} from 'react-native-gesture-handler';

// const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <View style={{marginRight: 10}}>
                <Avatar.Image
                  size={50}
                  source={{
                    uri:
                      'https://lh3.googleusercontent.com/proxy/vYW0ywk_se7A__NBSJIFTT1S0_9V3SFrOk-UxiQJIJxWG0GcY1g1y9pG7O9YK-7g76jx7JNrKTiOopdeiUuLx8C-HzCbr-i-FcsrCnj3cX7jz2uAzA',
                  }}
                />
              </View>

              <View>
                <Text style={styles.title}>Name</Text>
                <Caption style={styles.caption}>@userid</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Follower</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  30
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <Drawer.Item
              icon={({color, size}) => (
                <Icon name="home-outline" size={size} color={color} />
              )}
              label="Home"
            />
            <Drawer.Item
              icon={({color, size}) => (
                <Feather name="user" size={size} color={color} />
              )}
              label="Profile"
            />
            <Drawer.Item
              icon={({color, size}) => (
                <Icon name="settings-outline" size={size} color={color} />
              )}
              label="Setting"
            />
            <Drawer.Item
              icon={({color, size}) => (
                <Icon
                  name="shield-checkmark-outline"
                  size={size}
                  color={color}
                />
              )}
              label="Support"
            />
          </Drawer.Section>

          <Drawer.Section title="Prefrences">
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View>
                <Switch value={darkTheme} onValueChange={toggleTheme} />
              </View>
            </View>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <Drawer.Item
          icon={({color, size}) => (
            <Icon name="log-out-outline" size={size} color={color} />
          )}
          label="Sign-Out"
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
