// CustomTextInput.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  multiline = false,
  editable = true,
  maxLength,
  autoCapitalize = 'none',
  style,
  placeholderColor,
  ...rest
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderColor}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      multiline={multiline}
      editable={editable}
      maxLength={maxLength}
      autoCapitalize={autoCapitalize}
      style={[styles.input, style]}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#111827',
    backgroundColor: '#fff',
  },
});

export default CustomTextInput;
