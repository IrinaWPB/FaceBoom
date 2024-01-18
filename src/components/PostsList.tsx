/* eslint-disable react-native/no-inline-styles */
import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PostCard, {PostType} from './PostCard';
import {pagination} from '../helpers/pagination';

interface IPostsProps {
  posts: PostType[];
}

export default function PostsList(props: IPostsProps) {
  const userPostPageSize = 4;
  const [userPostCurrentPage, setUserPostCurrentPage] = useState(1);
  const [userPostRenderedData, setUserPostRednderedData] = useState<PostType[]>(
    [],
  );
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);
  useEffect(() => {
    setIsLoadingUserPosts(true);
    const dataToRender = pagination(props.posts, 1, userPostPageSize);
    setUserPostRednderedData(dataToRender);
    setIsLoadingUserPosts(false);
  }, [props.posts]);

  return (
    <View style={{height: '80%'}}>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (isLoadingUserPosts) {
            return;
          }
          setIsLoadingUserPosts(true);
          const contentToAppend = pagination(
            props.posts,
            userPostCurrentPage + 1,
            userPostPageSize,
          );
          if (contentToAppend.length > 0) {
            setUserPostCurrentPage(curr => curr + 1);
            setUserPostRednderedData(prev => [...prev, ...contentToAppend]);
          }
          setIsLoadingUserPosts(false);
        }}
        data={userPostRenderedData}
        renderItem={({item}) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
