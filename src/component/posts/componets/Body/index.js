import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

export default function Body(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: props.imageUri,
        }}
      />
    </View>
  );
}
