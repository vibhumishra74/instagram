import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import {Platform, Image} from 'react-native';
import React from 'react';
import Homescreen from '../screens/homescreen';
import logo from '../../assets/images/logo.jpg';
function MyStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{
          title: 'Instagram',
          headerStyle: {
            backgroundColor: '#fff', //Set Header color
          },
          headerTitleStyle: {
            width: '100%',
            textAlign: 'center',
          },
          headerTitle: () => (
            <Image
              resizeMode="contain"
              // style={{width: 120}}
              style={{alignSelf: 'center', width: 125}}
              size={25}
              color="#fff"
              source={logo}
            />
          ),
          headerLeft: () => (
            <Feather
              styles={{paddingLeft: 2}}
              size={25}
              color="#000"
              name={Platform.OS === 'ios' ? 'ios-camera' : 'camera'}
            />
          ),
          headerLeftContainerStyle: {
            marginLeft: 10,
          },
          headerRightContainerStyle: {
            marginRight: 10,
          },
          headerRight: () => {
            return Platform.OS === 'ios' ? (
              <Feather name={'ios-send'} size={25} color="#000" />
            ) : (
              <Feather name={'send'} size={25} color="#000" />
            );
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
