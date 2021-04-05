import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import ProfilePicture from '../../profilepicture';
import story from '../storys';
import styles from './style';

export default function Story({imageUri, name}) {
  const [headerstory, setstory] = useState(false);
  let hstory = () => {
    headerstory;
    // (
    //   <Profilepicture
    //     uri={
    //       'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__340.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=_2JirDBiGzi3lM&vet=12ahUKEwjdqPjGt8ruAhVBRH0KHVmbAIUQMygBegUIARDVAQ..i&docid=Ba_eiczVaD9-zM&w=546&h=340&q=images&ved=2ahUKEwjdqPjGt8ruAhVBRH0KHVmbAIUQMygBegUIARDVAQ'
    //       // imageUri
    //     }
    //     size={1160}
    //   />
    // ),
    setstory(!headerstory);
  };
  return (
    <TouchableWithoutFeedback onPress={hstory}>
      <View>
        {headerstory ? headerstory : setstory}
        <ProfilePicture uri={imageUri} />
        <Text style={styles.container}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
