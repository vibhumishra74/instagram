import React from 'react';
import {Text, View} from 'react-native';
import ProfilePicture from '../../../profilepicture';
import styles from './style';

// export default function Header(imageUri, size = 60, name) {
export default function Header(props, size = 60) {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={props.imageUri} size={60} />
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
}
