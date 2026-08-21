import { StyleSheet, View } from 'react-native';
import React from 'react';

// Constants
import { COLORS, SPACING } from '../../constants';

// Components
import SearchComponent from '../../components/SearchComponent';
import Header from '../../components/common/Header';
import ExerciseCard from '../../components/ExerciseCard';

// data
import excercise from '../../data/exercises.json';

const bodyPartData = [
  { id: 1, name: 'Chest', excercises: 28 },
  { id: 2, name: 'Back', excercises: 28 },
  { id: 3, name: 'Legs', excercises: 28 },
  { id: 4, name: 'Shoulders', excercises: 28 },
  { id: 5, name: 'Arms', excercises: 28 },
];

const ExcerciseLibrary = () => {
  return (
    <View style={styles.container}>
      <Header title={'Excersise Library'} middle={true} />
      <SearchComponent />
      <ExerciseCard excercise={excercise} bodyPartData={bodyPartData} />
    </View>
  );
};

export default ExcerciseLibrary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.xl,
  },
});
