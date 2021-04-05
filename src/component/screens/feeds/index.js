import React from 'react';
import {FlatList} from 'react-native';
import Post from '../../posts';
import Stories from '../../stories';
import story from '../../stories/storys';

const Allpost = [
  {
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1562087926-662f8573327b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
      name: 'suraj Pawar',
    },
    image:
      'https://images.unsplash.com/photo-1549212926-920647491c5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    likecount: 346,
    id: '1',
    caption: 'My Love',
    postedat: 'a minute ago',
  },
  {
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Alia',
    },
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    likecount: 357,
    id: '2',
    caption: 'girl',
    postedat: 'a minute ago',
  },
  {
    user: {
      imageUri:
        'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      name: 'Vardhan',
    },
    image:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=344&q=80',
    likecount: 246,
    id: '3',
    caption: 'My mustache',
    postedat: 'a minute ago',
  },

  {
    user: {
      imageUri:
        'https://images.unsplash.com/photo-1596199757746-4d68503325ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=877&q=80',
      name: 'Vara',
    },
    image:
      'https://images.unsplash.com/photo-1596199757746-4d68503325ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=877&q=80',
    likecount: 246,
    id: '4',
    caption: 'Look My View',
    postedat: 'a minute ago',
  },
];
const Feed = () => {
  return (
    // <FlatList data={Allpost} renderItems={(item) => <Post post={item} />} />
    <FlatList
      data={Allpost}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Post post={item} />}
      ListHeaderComponent={Stories}
      verticle
    />
  );
};

export default Feed;
