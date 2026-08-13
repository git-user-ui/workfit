import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import exercises from './src/data/exercises.json';

const imageMap = {
  'images/0001-2gPfomN.jpg': require('./src/assets/images/0001-2gPfomN.jpg'),
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {
          backgroundColor: isDarkMode ? '#111' : '#F5F5F5',
        },
      ]}
    >
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            {
              color: isDarkMode ? '#FFF' : '#111',
            },
          ]}
        >
          WorkFit
        </Text>

        <FlatList
          data={exercises}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              <Image
                source={imageMap[item.image]}
                style={styles.image}
                resizeMode="cover"
              />

              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>

                <Text style={styles.category}>{item.category}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    marginTop: 16,
    marginBottom: 20,
  },

  list: {
    paddingBottom: 30,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFF',
    borderRadius: 16,

    marginBottom: 12,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },

  info: {
    flex: 1,
    marginLeft: 16,
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    textTransform: 'capitalize',
  },

  category: {
    fontSize: 14,
    color: '#777',
    marginTop: 6,
    textTransform: 'capitalize',
  },
});
