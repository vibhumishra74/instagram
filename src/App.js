import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Homescreen from './component/screens/homescreen';
import Stories from './component/stories';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaView>
      <View>
        {/* <Icon name="md-menu" size={30} />
        <Icon name="wine-outline" size={30} />
        <Icon name="git-branch" size={30} /> */}
        <Homescreen />
      </View>
    </SafeAreaView>
  );
}
