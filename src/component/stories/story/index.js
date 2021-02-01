import React from 'react';
import {View, Text} from 'react-native';
import ProfilePicture from '../../profilepicture';
import story from '../storys';
import styles from './style';

export default function Story({imageUri, name}) {
  return (
    <View>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.container}>{name}</Text>
    </View>
  );
}
