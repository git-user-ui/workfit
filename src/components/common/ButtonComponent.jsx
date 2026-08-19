import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

const ButtonComponent = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  variant = 'primary',
  style,
  textStyle,
  activeOpacity = 0.78,
  accessibilityLabel,
  leftIcon,
  rightIcon,
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.base,
        styles[variant],
        isDisabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={activeOpacity}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityState={{
        disabled: isDisabled,
        busy: loading,
      }}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? '#FFFFFF' : '#7041E8'}
        />
      ) : (
        <>
          {leftIcon}

          <Text style={[styles.text, styles[`${variant}Text`], textStyle]}>
            {title}
          </Text>

          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    borderRadius: 11,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 16,
  },

  primary: {
    backgroundColor: '#7041E8',
    shadowColor: '#7041E8',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
    shadowRadius: 13,
    elevation: 6,
  },

  secondary: {
    backgroundColor: '#10151E',
    borderWidth: 1,
    borderColor: '#292F3A',
  },

  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#7041E8',
  },

  disabled: {
    opacity: 0.5,
  },

  text: {
    fontSize: 14,
    fontWeight: '700',
  },

  primaryText: {
    color: '#FFFFFF',
  },

  secondaryText: {
    color: '#E8EAF0',
  },

  outlineText: {
    color: '#9D79F1',
  },
});
