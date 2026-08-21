import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, SPACING } from '../../constants';

import ProfileIcon from '../../assets/icons/person-outline.svg';
import ArrowRightIcon from '../../assets/icons/chevron-right.svg';
import SettingsIcon from '../../assets/icons/setting-filled.svg';

const profileOptions = [
  {
    id: 1,
    name: 'Personal Information',
    icon: <ProfileIcon height={20} width={20} color={COLORS.white} />,
  },
  { id: 2, name: 'My Progress', icon: <ProfileIcon height={20} width={20} /> },
  {
    id: 3,
    name: 'Workout Templates',
    icon: <ProfileIcon height={20} width={20} />,
  },
  {
    id: 4,
    name: 'Settings',
    icon: <SettingsIcon height={20} width={20} fill={COLORS.white} />,
  },
  {
    id: 5,
    name: 'Help & Support',
    icon: <ProfileIcon height={20} width={20} />,
  },
];

const ProfileComponent = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.details}>
          <Text style={styles.text}>28 {'\n'} Workouts</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.details}>
          <Text style={styles.text}>156 {'\n'} Exercises</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.details}>
          <Text style={styles.text}>12.5 k {'\n'} kcal Burned</Text>
        </View>
      </View>
      <View style={styles.settings}>
        {profileOptions.map(item => (
          <TouchableOpacity key={item.id} style={styles.settingsDetails}>
            <View style={styles.leftSideContainers}>
              {item.icon}
              <Text style={styles.optionstext}>{item.name}</Text>
            </View>

            <ArrowRightIcon height={20} width={20} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: SPACING.sm,
    justifyContent: 'space-evenly',
    paddingVertical: SPACING.xl,
  },
  details: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: COLORS.white,
  },
  line: {
    width: 1,
    height: '100%',
    backgroundColor: COLORS.textSecondary,
  },
  settings: {
    // paddingVertical: 20,
    marginVertical: 20,
    backgroundColor: COLORS.white,
    backgroundColor: COLORS.card,
    borderRadius: SPACING.md,
    // gap: 20,
  },
  settingsDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.lg,
    paddingVertical: 16,
  },
  leftSideContainers: {
    flexDirection: 'row',
    gap: 20,
  },
  optionstext: {
    color: COLORS.white,
  },
});
