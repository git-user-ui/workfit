import React, { forwardRef } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const CustomTextInput = forwardRef(
  (
    {
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
      placeholderColor = '#737A88',
      ...rest
    },
    ref,
  ) => {
    return (
      <TextInput
        ref={ref}
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
        selectionColor="#8B5CF6"
        cursorColor="#8B5CF6"
        {...rest}
      />
    );
  },
);

CustomTextInput.displayName = 'CustomTextInput';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: '#F4F5F7',
    fontSize: 14,
    paddingHorizontal: 4,
    paddingVertical: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
});

export default CustomTextInput;
