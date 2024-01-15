import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Title from './src/components/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import UserStoriesList from './src/components/UserStoriesList';
import PostsList from './src/components/PostsList';

export default function App() {
  const userStories = [
    {
      firstName: 'Joseph',
      id: '1',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Ben',
      id: '2',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivia',
      id: '3',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Kate',
      id: '4',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Molly',
      id: '5',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Chris',
      id: '10',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Ann',
      id: '6',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Max',
      id: '7',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Emma',
      id: '8',
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'John',
      id: '9',
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  const userPosts = [
    {
      firstName: 'Alison',
      lastName: 'Becker',
      location: 'New York, NY',
      likes: 100,
      comments: 23,
      bookmarks: 12,
      id: '1',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Jennifer',
      lastName: 'Becker',
      location: 'Miami, FL',
      likes: 1020,
      comments: 233,
      bookmarks: 112,
      id: '2',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      lastName: 'Spara',
      location: 'Miami, NY',
      likes: 34,
      comments: 2,
      bookmarks: 45,
      id: '3',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Emma',
      lastName: 'Bright',
      location: 'New York, NY',
      likes: 1003,
      comments: 223,
      bookmarks: 13,
      id: '4',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Ella',
      lastName: 'Stone',
      location: 'New York, NY',
      likes: 16,
      comments: 53,
      bookmarks: 63,
      id: '5',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Sam',
      lastName: 'Stmith',
      location: 'Buffalo, NY',
      likes: 163,
      comments: 523,
      bookmarks: 23,
      id: '6',
      image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Title title="Let's Explore" />
          <TouchableOpacity style={styles.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color="#898DAE" />
            <View style={styles.messageNmberContainer}>
              <Text style={styles.messageNumber}>2</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.userStoriesContainer}>
          <UserStoriesList stories={userStories} />
        </View>

        <View style={styles.postsContainer}>
          <PostsList posts={userPosts} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 24,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#e8e8e8',
    borderRadius: 20,
  },
  messageNmberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  messageNumber: {
    color: 'white',
    fontSize: 6,
    fontFamily: 'InterTight-Bold',
  },
  userStoriesContainer: {
    marginTop: 20,
  },
  postsContainer: {
    marginTop: 20,
  },
});
