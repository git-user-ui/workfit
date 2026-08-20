import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Data
import excercise from '../data/exercises.json';
import { BORDER_RADIUS, COLORS, SPACING } from '../constants';

const MainCard = () => {
  return (
    <View style={styles.container}>
      {/* ImageContainer */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/excercises/images/0023-Yza7XrQ.jpg')}
          style={styles.imageView}
        />
      </View>

      {/* TextContainer */}
      <View style={styles.textContainer}>
        {/* TopContainer */}
        <View style={styles.topTextContainer}>
          <View style={styles.topText}>
            <Text>Push Day</Text>
            <Text>Chest, Shoulders, Triceps</Text>
          </View>
          <View style={styles}>
            <Text>8:30 AM</Text>
          </View>
        </View>
        {/* BottomContainer */}
        <View style={styles.bottomTextContainer}>
          <Text>6 exercises</Text>
          <Text>8 sets</Text>
          <Text>45 minutes</Text>
        </View>
      </View>
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    flexDirection: 'row',
    gap: SPACING.md,
  },
  imageView: {
    width: 70,
    height: 90,
    borderRadius: SPACING.md,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topTextContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topText: {
    flexShrink: 1,
  },
  bottomTextContainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
    gap: SPACING.xl,
  },
});
