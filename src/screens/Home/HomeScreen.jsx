// React Imports
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import excercise from '../../data/exercises.json';
import { FlashList } from '@shopify/flash-list';

const HomeScreen = () => {
  console.log(excercise);
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>

      <FlashList
        data={excercise}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
