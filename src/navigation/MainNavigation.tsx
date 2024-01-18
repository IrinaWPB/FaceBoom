/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileTabTitle from '../components/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent';
import {View} from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export const ProfileTabsNavigation = () => {
  return (
    <View
      style={{
        height: 1000,
      }}>
      <ProfileTabs.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
          tabBarStyle: {
            zIndex: 0,
          },
          lazy: true,
        }}>
        <ProfileTabs.Screen
          name={'Photos'}
          component={ProfileTabContent}
          // options={{
          //   tabBarLabel: ({focused}) => (
          //     <ProfileTabTitle title="Photos" isFocused={focused} />
          //   ),
          // }}
        />
        <ProfileTabs.Screen
          name={'Videos'}
          component={ProfileTabContent}
          // options={{
          //   tabBarLabel: ({focused}) => (
          //     <ProfileTabTitle title="Videos" isFocused={focused} />
          //   ),
          // }}
        />
        <ProfileTabs.Screen
          name={'Saved'}
          component={ProfileTabContent}
          // options={{
          //   tabBarLabel: ({focused}) => (
          //     <ProfileTabTitle title="Saved" isFocused={focused} />
          //   ),
          // }}
        />
      </ProfileTabs.Navigator>
    </View>
  );
};

export default MainNavigation;
