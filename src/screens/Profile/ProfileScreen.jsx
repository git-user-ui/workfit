import { Alert, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { signOut } from '@react-native-firebase/auth';
import ButtonComponent from '../../components/common/ButtonComponent';
import { auth } from '../../configs/firebase';

const ProfileScreen = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log('Logout Error:', error);
      Alert.alert('Error', error.message);
    }
  };
  return (
    <View>
      <Text>ProfileScreen</Text>
      <ButtonComponent title={'Logout'} onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
