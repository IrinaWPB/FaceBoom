import {FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserStoryCard, {StoryType} from './UserStoryCard';
import {pagination} from '../helpers/pagination';

interface IUserStoriesListProps {
  stories: StoryType[];
}

export default function UserStoriesList(props: IUserStoriesListProps) {
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRednderedData] = useState<
    StoryType[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  useEffect(() => {
    setIsLoadingUserStories(true);
    const dataToRender = pagination(props.stories, 1, userStoriesPageSize);
    setUserStoriesRednderedData(dataToRender);
    setIsLoadingUserStories(false);
  }, [props.stories]);

  return (
    <FlatList
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        if (isLoadingUserStories) {
          return;
        }
        setIsLoadingUserStories(true);
        const contentToAppend = pagination(
          props.stories,
          userStoriesCurrentPage + 1,
          userStoriesPageSize,
        );
        if (contentToAppend.length > 0) {
          setUserStoriesCurrentPage(currentPage => currentPage + 1);
          setUserStoriesRednderedData(prev => [...prev, ...contentToAppend]);
        }
        setIsLoadingUserStories(false);
      }}
      data={userStoriesRenderedData}
      renderItem={({item}) => <UserStoryCard story={item} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
