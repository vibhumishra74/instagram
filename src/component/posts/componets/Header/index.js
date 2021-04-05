import React, {useState} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import ProfilePicture from '../../../profilepicture';
import styles from './style';
import Icon from 'react-native-vector-icons/Entypo';
import ImageModal from 'react-native-image-modal';

// export default function Header(imageUri, size = 60, name) {
export default function Header(props, size = 60) {
  const [headerstory, setstory] = useState(props.imageUri);
  let story = () => {
    headerstory(
      <Profilepicture
        uri={
          'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__340.jpg&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&tbnid=_2JirDBiGzi3lM&vet=12ahUKEwjdqPjGt8ruAhVBRH0KHVmbAIUQMygBegUIARDVAQ..i&docid=Ba_eiczVaD9-zM&w=546&h=340&q=images&ved=2ahUKEwjdqPjGt8ruAhVBRH0KHVmbAIUQMygBegUIARDVAQ'
        }
        size={1160}
      />,
    );
    setstory(headerstory);
  };
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableWithoutFeedback onPress={story}>
          <ProfilePicture uri={headerstory} size={60} />

          {/* <ImageModal
            resizeMode="contain"
            imageBackgroundColor="#000000"
            style={{
              width: 250,
              height: 250,
            }}
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2019/07/25/18/58/church-4363258_960_720.jpg',
            }}
          /> */}
        </TouchableWithoutFeedback>
        <Text style={styles.name}>{props.name}</Text>
      </View>
      <View style={styles.right}>
        <Icon name="dots-three-vertical" size={20} color="black" />
      </View>
    </View>
  );
}
