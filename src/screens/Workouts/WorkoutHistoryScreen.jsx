import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/common/Header';
import { COLORS, SPACING } from '../../constants';
import MainCard from '../../components/MainCard';

// Data
import excercise from '../../data/exercises.json';

const WorkoutHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" showHideTransition="fade" />
      <Header title={'History'} isFilter={true} />

      <MainCard
        excercise={excercise}
        isbottomContainerRequired={true}
        isTimeRequired={true}
        isWorkout={true}
      />
    </View>
  );
};

export default WorkoutHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.xl,
    backgroundColor: COLORS.background,
  },
  text: {
    color: 'white',
  },
});
