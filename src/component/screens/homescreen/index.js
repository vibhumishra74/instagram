import React from 'react';
import {View, Text} from 'react-native';
import Post from '../../posts';
import Feed from '../feeds';

const Allpost = {
  user: {
    imageUri:
      'https://images.unsplash.com/photo-1562087926-662f8573327b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
    name: 'suraj',
  },
  image:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  likecount: 346,
  caption: 'girl',
  postedat: 'a minute ago',
};

export default function Homescreen() {
  return (
    <View style={{paddingLeft: 1}}>
      {/* <Post post={Allpost} /> */}
      <Feed />
    </View>
  );
}
