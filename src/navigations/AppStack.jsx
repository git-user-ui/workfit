import React from 'react';

import { StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import { COLORS } from '../constants';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        contentStyle: {
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Stack.Screen name="MainTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
