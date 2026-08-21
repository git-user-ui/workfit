import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import Arrowback from '../../assets/icons/arrow-back-outline.svg';
import FilterIcon from '../../assets/icons/filter-outline.svg';
import SettingIcon from '../../assets/icons/setting-filled.svg';
import { COLORS, FONT_SIZE, SPACING, UNIQUE_VALUE } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const Header = ({
  title,
  rightSide,
  middle = false,
  leftSide,
  onPress,
  isFilter,
  isSetting,
  isBtn,
  isBackArrowRequired = true,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, middle ? styles.titleContainerMiddle : '']}>
      {/* Back button */}
      {isBackArrowRequired && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Arrowback width={20} height={20} color={COLORS.white} />
        </TouchableOpacity>
      )}

      {/* Centered title */}
      <View
        style={[
          styles.titleContainer,
          middle ? styles.titleContainerMiddle : '',
        ]}
      >
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {isFilter && (
        <TouchableOpacity style={styles.rightSide}>
          <FilterIcon color={COLORS.white} height={20} width={20} />
        </TouchableOpacity>
      )}
      {isSetting && (
        <TouchableOpacity style={styles.rightSide}>
          <SettingIcon fill={COLORS.white} height={20} width={20} />
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

  titleContainerMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: SPACING.lg,
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
  rightSide: {},
});
