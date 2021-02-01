import React from 'react';
import {View} from 'react-native';
import Header from './componets/Header';
import Body from './componets/Body';
import Footer from './componets/Footer';

// export default function Post({post: {user}}) {
export default function Post(props) {
  let post = props.post;
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.image} />
      <Footer
        like={post.likecount}
        caption={post.caption}
        post={post.postedat}
      />
    </View>
  );
}
