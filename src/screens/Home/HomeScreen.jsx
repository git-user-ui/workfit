// React Imports
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import excercise from '../../data/exercises.json';

const HomeScreen = () => {
  console.log(excercise);
  return (
    <View>
      <Text>HomeScreen</Text>

      <FlatList
        data={excercise}
        renderItem={item => (
          <>
            <Text style={styles.name}>{item.name}</Text>
          </>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  name: {
    color: 'white',
  },
});
