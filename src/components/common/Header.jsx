import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import Arrowback from '../../assets/icons/arrow-back-outline.svg';
import FilterIcon from '../../assets/icons/filter-outline.svg';
import { COLORS, FONT_SIZE, SPACING, UNIQUE_VALUE } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Header = ({
  title,
  rightSide,
  middle,
  leftSide,
  onPress,
  isFilter,
  isBtn,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Arrowback width={20} height={20} color={COLORS.white} />
      </TouchableOpacity>

      {/* Centered title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {isFilter && (
        <TouchableOpacity style={styles.rightSide}>
          <FilterIcon color={COLORS.white} height={20} width={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SPACING.xl,
  },

  backButton: {
    zIndex: UNIQUE_VALUE.two,
  },

  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.xl,
    fontWeight: '600',
  },
});
