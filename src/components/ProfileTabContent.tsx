import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {horizontalScale, verticalScale} from '../helpers/scaling';

export default function ProfileTabContent() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={styles.image}
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 350,
  },
  contentContainer: {
    paddingHorizontal: horizontalScale(12),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: horizontalScale(159),
    height: verticalScale(90),
    marginVertical: verticalScale(3),
  },
});
