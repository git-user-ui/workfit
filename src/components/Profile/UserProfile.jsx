import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constants';

import CameraIcon from '../../assets/icons/camera-outline.svg';

const UserProfile = ({ email, photoUrl }) => {
  return (
    <View style={styles.avatarSection}>
      <View style={styles.avatarWrapper}>
        <View style={styles.avatar}>
          <View style={styles.avatarHead} />
          <View style={styles.avatarBody} />
          <View>
            <Image />
          </View>
        </View>

        <TouchableOpacity
          style={styles.cameraButton}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel="Add profile photo"
        >
          <CameraIcon width={16} height={16} fill={COLORS.white} />
        </TouchableOpacity>
      </View>

      <Text style={styles.photoTitle}>Add profile photo</Text>
      <Image source={{ uri: photoUrl }} />

      {email && <Text style={styles.photoSubtitle}>{email}</Text>}
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  avatarSection: {
    alignItems: 'center',
    marginTop: 23,
    marginBottom: 27,
  },

  avatarWrapper: {
    position: 'relative',
  },

  avatar: {
    width: 78,
    height: 78,
    borderRadius: 39,
    backgroundColor: '#B9BFCE',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#242A35',
  },

  avatarHead: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#7F8799',
    marginTop: 15,
  },

  avatarBody: {
    width: 39,
    height: 28,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#7F8799',
    marginTop: 5,
  },

  cameraButton: {
    position: 'absolute',
    right: -3,
    bottom: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#7041E8',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#090D15',
    shadowColor: '#7041E8',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,
    elevation: 5,
  },

  cameraIcon: {
    color: '#FFFFFF',
    fontSize: 19,
    lineHeight: 21,
    fontWeight: '500',
  },

  photoTitle: {
    color: '#D9DCE2',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 10,
  },

  photoSubtitle: {
    color: '#666D7A',
    fontSize: 20,
    marginTop: 3,
  },
});
