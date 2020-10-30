import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import images from './api/images';
import MyWallet from './Screens/MyWallet';
import Search from './Screens/Search';
import Account from './Screens/Account';
import Icon from './Components/Icon';
const Tabs = AnimatedTabBarNavigator();

const TabBarIcon = (props) => {
  return (
    <Icon
      name={props.name}
      // size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

export default () => (
  <Tabs.Navigator
    initialRouteName="Home"
    appearence={{floating: true, whenActiveShow: 'icon-only'}}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#C4C4C4',
      activeBackgroundColor: '#fff',
      tabStyle: {
        borderRadius: 25,
        width: '80%',
        marginHorizontal: 35,
      },
    }}>
    <Tabs.Screen
      name="Home"
      component={MyWallet}
      options={{
        tabBarIcon: ({focused, color}) => (
          <TabBarIcon focused={focused} tintColor={color} name="tower" />
        ),
      }}
    />
    <Tabs.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({focused, color, size}) => (
          <TabBarIcon focused={focused} tintColor={color} name="search" />
        ),
      }}
    />

    <Tabs.Screen
      name="Profile"
      component={Account}
      options={{
        tabBarIcon: ({focused, color}) => (
          <TabBarIcon focused={focused} tintColor={color} name="profile" />
        ),
      }}
    />
  </Tabs.Navigator>
);
