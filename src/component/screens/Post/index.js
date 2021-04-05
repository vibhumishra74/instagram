import React from 'react';
import {View, Text} from 'react-native';

export default function Posts() {
  return (
    <View style={{backgroundColor: '#888', height: 1500}}>
      <Text
        style={{
          marginTop: '50%',
          textAlign: 'center',
          color: 'white',
          fontSize: 30,
        }}>
        Posts
      </Text>
    </View>
  );
}
