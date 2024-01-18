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
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../helpers/scaling';

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
          <UserProfileImage
            profileImage={props.post.profileImage}
            size={horizontalScale(45)}
          />
          <View style={styles.userCredetials}>
            <Text style={styles.userName}>
              {props.post.firstName} {props.post.lastName}
            </Text>
            {props.post.location && <Text>{props.post.location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={props.post.image} style={styles.image} />
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
    marginTop: verticalScale(20),
    paddingBottom: verticalScale(5),
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
    marginLeft: horizontalScale(10),
  },
  userName: {
    fontFamily: 'InterTight-Bold',
    color: '#000',
    fontSize: scaleFontSize(16),
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: verticalScale(15),
  },
  image: {
    width: '95%',
    borderRadius: 12,
  },
  postFooter: {
    flexDirection: 'row',
    marginVertical: verticalScale(15),
  },
  icons: {
    flexDirection: 'row',
    marginLeft: horizontalScale(15),
    alignItems: 'center',
  },
  iconText: {
    marginLeft: horizontalScale(3),
    color: '#79869F',
  },
});
