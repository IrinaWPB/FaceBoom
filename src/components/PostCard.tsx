import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import UserProfileImage from './UserProfileImage';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

export type PostType = {
  firstName: string;
  lastName: string;
  location?: string;
  image: ImageSourcePropType;
  profileImage: ImageSourcePropType;
  bookmarks: number;
  likes: number;
  comments: number;
  id: string;
};

interface IPostProps {
  post: PostType;
}

export default function PostCard(props: IPostProps) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <UserProfileImage profileImage={props.post.profileImage} size={45} />
          <View style={styles.userCredetials}>
            <Text style={styles.userName}>
              {props.post.firstName} {props.post.lastName}
            </Text>
            {props.post.location && <Text>{props.post.location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} />
      </View>
      <View style={styles.image}>
        <Image source={props.post.image} />
      </View>
      <View style={styles.postFooter}>
        <View style={styles.icons}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={styles.iconText}>{props.post.likes}</Text>
        </View>
        <View style={styles.icons}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={styles.iconText}>{props.post.bookmarks}</Text>
        </View>
        <View style={styles.icons}>
          <FontAwesomeIcon icon={faComment} color="#79869F" />
          <Text style={styles.iconText}>{props.post.comments}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 35,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
  },
  userCredetials: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  userName: {
    fontFamily: 'InterTight-Bold',
    color: '#000',
    fontSize: 16,
  },
  image: {
    alignItems: 'center',
    marginTop: 25,
  },
  postFooter: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 3,
    color: '#79869F',
  },
});
