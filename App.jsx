//React Imports
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//
// import { configureGoogleSignIn } from './src/config/googleAuth';
import { initializeDatabase } from './src/database/database';

//Navigations
import RootNavigator from './src/navigations/RootNavigator';

//Constants
import { COLORS, UNIQUE_VALUE } from './src/constants';

//hooks
import { useNetworkListener } from './src/hooks/useNetworkListener';
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { configureGoogleSignIn } from './src/configs/googleAuth';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);

  // useNetworkListener();

  useEffect(() => {
    configureGoogleSignIn();

    const unsubscribe = onAuthStateChanged(getAuth(), firebaseUser => {
      setUser(firebaseUser);
      setInitializing(false);
      setIsAppReady(true);
    });

    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   const initializeApp = async () => {
  //     try {
  //       await initializeDatabase();

  //       console.log('Database initialized');
  //     } catch (error) {
  //       console.error('App initialization failed:', error);
  //     } finally {
  //       setIsAppReady(true);
  //     }
  //   };

  //   initializeApp();
  // }, []);

  if (!isAppReady) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.safeArea]}>
        <StatusBar barStyle={isDarkMode ? 'dark-content' : 'dark-content'} />
        <RootNavigator user={user} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: UNIQUE_VALUE.flexOne,
    backgroundColor: COLORS.white,
  },
});
