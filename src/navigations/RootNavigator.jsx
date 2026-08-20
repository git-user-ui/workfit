// React
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Stacks
import AuthStack from './AuthStack';
import AppStack from './AppStack';

// Auth and Reduxs
import { setLoading, setLoggedIn } from '../redux/slices/authSlice';

// constants

const RootNavigator = ({ user }) => {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
