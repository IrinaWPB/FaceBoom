import {View, ImageSourcePropType, StyleSheet, Image} from 'react-native';
import React from 'react';

interface IUserProfileImageProps {
  profileImage: ImageSourcePropType;
  size: number;
}
export default function UserProfileImage(props: IUserProfileImageProps) {
  return (
    <View style={[styles.userImageContainer, {borderRadius: props.size}]}>
      <Image
        source={props.profileImage}
        style={{height: props.size, width: props.size}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: 3,
  },
});
