import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Homescreen from './component/screens/homescreen';
import Stories from './component/stories';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Discovery from './component/screens/Discovery';
import Posts from './component/screens/Post';
import Notification from './component/screens/notification';
import Profile from './component/screens/Profile';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  // const Tab = createBottomTabNavigator();
  // enableScreens();
  return (
    // <SafeAreaView>
    //   <View>
    //     {/* <Icon name="md-menu" size={30} />
    //     <Icon name="wine-outline" size={30} />
    //     <Icon name="git-branch" size={30} /> */}
    //     <Homescreen />
    //   </View>
    // </SafeAreaView>
    // <SafeAreaProvider>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Homescreen" component={Homescreen} />
    //     <Tab.Screen name="Discovery" component={Discovery} />
    //     <Tab.Screen name="Posts" component={Posts} />
    //     <Tab.Screen name="Notification" component={Notification} />
    //     <Tab.Screen name="ProfilePicture" component={Profile} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    //  </SafeAreaProvider>
    <NavigationContainer>
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
              iconName = focused
                ? 'md-bookmark-outline'
                : 'ios-bookmark-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={24} color={'white'} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Discovery" component={Discovery} />
        <Tab.Screen name="Posts" component={Posts} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
