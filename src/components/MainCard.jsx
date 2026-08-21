import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

// Data
import {
  BORDER_RADIUS,
  COLORS,
  FONT_SIZE,
  SPACING,
  UNIQUE_VALUE,
} from '../constants';

// Assets
import TimerIcon from '../assets/icons/timer-outline.svg';
import StarIcon from '../assets/icons/star-outline.svg';
import StarIconFilled from '../assets/icons/star-filled.svg';
import CrownIcon from '../assets/icons/crown-outline.svg';
import CrownIconFilled from '../assets/icons/crown-filled.svg';
import { FlashList } from '@shopify/flash-list';

const MainCard = ({
  isWorkout = false,
  isExcercise = false,
  excercise,
  isTimeRequired = false,
  isArrowRequired = false,
  isbottomContainerRequired = false,
  isStar = false,
  isCrown = false,
}) => {
  const [isAdded, setIsAdded] = useState([]);

  const handleAdd = id => {
    setIsAdded(!isAdded);
    console.log('selected id', id);
  };

  return (
    <View style={styles.wrapper}>
      <FlashList
        data={excercise}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.container}>
            {/* ImageContainer */}
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/excercises/images/0023-Yza7XrQ.jpg')}
                style={styles.imageView}
              />
            </View>

            {/* TextContainer */}
            <View
              style={[
                styles.textContainer,
                !isbottomContainerRequired ? styles.textContainerMiddle : '',
              ]}
            >
              {/* TopContainer */}
              <View style={[styles.topTextContainer]}>
                <View
                  style={[
                    styles.topText,
                    !isbottomContainerRequired ? styles.topTextMiddle : '',
                  ]}
                >
                  {isWorkout && (
                    <>
                      <Text style={styles.workoutDetails}>Push Day</Text>
                      <Text style={styles.bodyParts}>
                        Chest, Shoulders, Triceps
                      </Text>
                    </>
                  )}
                  {isExcercise && (
                    <>
                      <Text style={styles.workoutDetails}>{item.name}</Text>
                      <Text style={styles.bodyParts}>{item.body_part}</Text>
                    </>
                  )}
                </View>
                {isTimeRequired && (
                  <View>
                    <Text style={styles.woroutTimeText}>8:30 AM</Text>
                  </View>
                )}
                {isStar && (
                  <TouchableOpacity onPress={() => handleAdd(item.id)}>
                    {isAdded ? (
                      <StarIconFilled height={20} width={20} fill={'#efa722'} />
                    ) : (
                      <StarIcon height={20} width={20} color={COLORS.white} />
                    )}
                  </TouchableOpacity>
                )}
                {isCrown && (
                  <TouchableOpacity onPress={() => handleAdd(item.id)}>
                    {isAdded === id ? (
                      <CrownIconFilled height={20} width={20} />
                    ) : (
                      <CrownIcon height={20} width={20} fill={COLORS.white} />
                    )}
                  </TouchableOpacity>
                )}
              </View>
              {/* BottomContainer */}
              {isbottomContainerRequired && (
                <View style={styles.bottomTextContainer}>
                  <View style={styles.timerContainer}>
                    <TimerIcon height={16} width={16} fill={'#fff'} />
                    <Text style={styles.excerciseText}>6 exercises</Text>
                  </View>
                  <View style={styles.timerContainer}>
                    <TimerIcon height={16} width={16} fill={'#fff'} />
                    <Text style={styles.excerciseText}>8 sets</Text>
                  </View>
                  <View style={styles.timerContainer}>
                    <TimerIcon height={16} width={16} fill={'#fff'} />
                    <Text style={styles.excerciseText}>45 minutes</Text>
                  </View>
                </View>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MainCard;

const styles = StyleSheet.create({
  wrapper: {
    flex: UNIQUE_VALUE.flexOne,
  },
  container: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    flexDirection: 'row',
    gap: SPACING.md,
    marginBottom: SPACING.xl,
  },
  imageView: {
    width: 60,
    height: 70,
    borderRadius: SPACING.md,
  },
  textContainer: {
    flex: UNIQUE_VALUE.flexOne,
    justifyContent: 'space-between',
  },
  textContainerMiddle: {
    flex: UNIQUE_VALUE.flexOne,
    justifyContent: 'space-between',
  },
  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topText: {
    flexShrink: UNIQUE_VALUE.flexOne,
  },
  topTextMiddle: {},
  workoutDetails: {
    color: COLORS.white,
  },
  bodyParts: {
    color: COLORS.white,
  },
  woroutTimeText: { color: COLORS.white },
  bottomTextContainer: {
    flexDirection: 'row',
    gap: SPACING.md,
    alignItems: 'center',
  },
  timerContainer: {
    flexShrink: UNIQUE_VALUE.flexOne,
    flexDirection: 'row',
    gap: SPACING.xs,
    alignItems: 'center',
  },
  excerciseText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.sm,
  },
});
