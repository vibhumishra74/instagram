import React from 'react';
import {FlatList, View} from 'react-native';
import Story from './story';
import Storys from './storys';

export default function Stories() {
  return (
    <FlatList
      data={Storys}
      keyExtractor={(item) => item.user.id}
      renderItem={({item}) => (
        <Story imageUri={item.user.imageUri} name={item.user.name} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
