import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { signOut } from '@react-native-firebase/auth';
import ButtonComponent from '../../components/common/ButtonComponent';
import { auth } from '../../configs/firebase';
import Header from '../../components/common/Header';
import { COLORS, SPACING } from '../../constants';
import UserProfile from '../../components/Profile/UserProfile';
import ProfileComponent from '../../components/Profile/ProfileComponent';

const ProfileScreen = () => {
  const { email, photoURL } = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log('Logout Error:', error);
      Alert.alert('Error', error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Header isBackArrowRequired={false} title={'Profile'} isSetting={true} />
      <UserProfile email={email} photoUrl={photoURL} />
      <ProfileComponent />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.xl,
  },
});
