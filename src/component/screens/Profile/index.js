import React from 'react';
import {View, Text} from 'react-native';

export default function Profile() {
  return (
    <View style={{backgroundColor: 'gray', height: 1500}}>
      <Text
        style={{
          marginTop: '50%',
          textAlign: 'center',
          color: 'white',
          fontSize: 30,
        }}>
        ProfilePicture
      </Text>
    </View>
  );
}
