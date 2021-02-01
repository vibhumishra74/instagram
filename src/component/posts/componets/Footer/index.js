import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export default function Footer({like, caption, post}) {
  return (
    <View style={styles.container}>
      <Text style={styles.like}>{like} Likes</Text>
      <Text style={styles.caption}>{caption} </Text>
      <Text style={styles.post}>{post}</Text>
    </View>
  );
}
