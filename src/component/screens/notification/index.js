import React from 'react';
import {View, Text} from 'react-native';

export default function Notification() {
  return (
    <View style={{backgroundColor: 'green', height: 1500}}>
      <Text
        style={{
          marginTop: '50%',
          textAlign: 'center',
          color: 'white',
          fontSize: 30,
        }}>
        Notification
      </Text>
    </View>
  );
}
