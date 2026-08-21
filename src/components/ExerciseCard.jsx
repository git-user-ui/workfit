import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchComponent from './SearchComponent';
import { COLORS, SPACING } from '../constants';

const ExerciseCard = ({ excercise, bodyPartData }) => {
  return (
    <ScrollView style={styles.container}>
      {bodyPartData.map(item => (
        <View style={styles.card} key={item.id}>
          <View style={styles.nameContainer}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
          <Image
            style={styles.image}
            source={require('./../assets/excercises/images/0001-2gPfomN.jpg')}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default ExerciseCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
  card: {
    width: '50%',
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: SPACING.md,
    marginBottom: SPACING.lg,
  },
  nameContainer: {
    position: 'absolute',
  },
  text: {
    color: COLORS.blue,
    zIndex: 1,
  },
  image: {
    borderRadius: SPACING.md,
  },
});
