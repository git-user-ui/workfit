// React Imports
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// AuthenticationScreen
import RegisterScreen from '../screens/Auth/RegisterScreen';

// Constants
import { COLORS } from '../constants';
import LoginScreen from '../screens/Auth/LoginScreen';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
