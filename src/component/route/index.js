import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MyStack from './home.router';
import Discovery from '../screens/Discovery';
import Posts from '../screens/Post';
import Notification from '../screens/notification';
import Profile from '../screens/Profile';

import Ionicons from 'react-native-vector-icons/Ionicons';

function Router() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{backgroundColor: '#694fad'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'md-home-outline' : 'ios-home-outline';
          } else if (route.name === 'Discovery') {
            iconName = focused ? 'md-search' : 'ios-search';
          } else if (route.name === 'Posts') {
            iconName = focused
              ? 'md-add-circle-outline'
              : 'ios-add-circle-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'md-heart-outline' : 'ios-heart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'md-bookmark-outline' : 'ios-bookmark-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={24} color={'white'} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
      <Tab.Screen name="Home" component={MyStack} />

      <Tab.Screen name="Discovery" component={Discovery} />
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Router;
