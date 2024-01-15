import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import PostCard, {PostType} from './PostCard';
import {pagination} from '../helpers/pagination';

interface IPostsProps {
  posts: PostType[];
}

export default function PostsList(props: IPostsProps) {
  const userPostPageSize = 4;
  const [userPostCurrentPage, setUserPostCurentPage] = useState(1);
  const [userPostRenderedData, setUserPostRednderedData] = useState<PostType[]>(
    [],
  );
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);
  console.log(props.posts.length);
  useEffect(() => {
    setIsLoadingUserPosts(true);
    const dataToRender = pagination(props.posts, 1, userPostPageSize);
    setUserPostRednderedData(dataToRender);
    setIsLoadingUserPosts(false);
  }, [props.posts]);

  return (
    <FlatList
      onEndReachedThreshold={0.5}
      data={userPostRenderedData}
      renderItem={({item}) => <PostCard post={item} />}
      showsVerticalScrollIndicator={false}
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
          setUserPostCurentPage(userPostCurrentPage + 1);
          setUserPostRednderedData(prev => [...prev, ...contentToAppend]);
        }
        setIsLoadingUserPosts(false);
      }}
    />
  );
}
