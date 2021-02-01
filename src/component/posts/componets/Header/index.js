import React from 'react';
import {Text, View} from 'react-native';
import ProfilePicture from '../../../profilepicture';
import styles from './style';
import Icon from 'react-native-vector-icons/Entypo';

// export default function Header(imageUri, size = 60, name) {
export default function Header(props, size = 60) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ProfilePicture uri={props.imageUri} size={60} />
        <Text style={styles.name}>{props.name}</Text>
      </View>
      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={20} color="black" />
      </View>
    </View>
  );
}
