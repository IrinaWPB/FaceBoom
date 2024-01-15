import {View, Text, ImageSourcePropType, StyleSheet} from 'react-native';
import React from 'react';
import UserProfileImage from './UserProfileImage';

export type StoryType = {
  firstName: string;
  id: string;
  profileImage: ImageSourcePropType;
};

interface IUserStoryCardProps {
  story: StoryType;
}

export default function UserStoryCard(props: IUserStoryCardProps) {
  return (
    <View style={styles.storyContainer}>
      <UserProfileImage profileImage={props.story.profileImage} size={65} />
      <Text style={styles.firstName}>{props.story.firstName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  firstName: {
    fontSize: 14,
    fontFamily: 'InterTight-Bold',
    color: '#022150',
    marginTop: 8,
    textAlign: 'center',
  },
});
