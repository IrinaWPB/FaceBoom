import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import UserProfileImage from '../components/UserProfileImage';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../helpers/scaling';
import {ProfileTabsNavigation} from '../navigation/MainNavigation';

const Profile = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.imageContainer}>
          <UserProfileImage
            size={horizontalScale(110)}
            profileImage={require('../../assets/images/default_profile.png')}
          />
        </View>
        <Text style={styles.userName}>Jenifer White</Text>
        <View style={styles.statsContainer}>
          <View>
            <Text style={styles.statsAmount}>45</Text>
            <Text style={styles.statsText}>Following</Text>
          </View>
          <View style={styles.statsBorder} />
          <View>
            <Text style={styles.statsAmount}>30</Text>
            <Text style={styles.statsText}>Followers</Text>
          </View>
          <View style={styles.statsBorder} />
          <View>
            <Text style={styles.statsAmount}>100</Text>
            <Text style={styles.statsText}>Posts</Text>
          </View>
        </View>

        <View style={styles.tabsContainer}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: verticalScale(32),
  },
  userName: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontFamily: 'InterTight',
    fontWeight: '600',
    fontSize: scaleFontSize(30),
  },
  statsAmount: {
    fontFamily: 'InterTight',
    fontWeight: '600',
    fontSize: scaleFontSize(25),
    textAlign: 'center',
  },
  statsText: {
    textAlign: 'center',
    fontFamily: 'InterTight',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    color: '#929498',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: verticalScale(25),
    paddingBottom: verticalScale(20),
    marginHorizontal: horizontalScale(40),
    borderBottomWidth: 1,
    borderColor: '#e1e3ec',
  },
  statsBorder: {
    borderRightWidth: 1,
    borderColor: '#d4d7e3',
  },
  tabsContainer: {
    flex: 1,
  },
});
