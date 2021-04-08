import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Post from '../../posts';
import Feed from '../feeds';

export default function Homescreen() {
  return (
    <SafeAreaView
      style={{
        color: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
      }}>
      <Feed />
    </SafeAreaView>
  );
}
