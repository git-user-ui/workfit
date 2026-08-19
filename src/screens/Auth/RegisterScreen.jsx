// React Imports
import React, { useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Components
import CustomTextInput from '../../components/common/CustomInput';

const RegisterScreen = () => {
  // hooks
  const navigation = useNavigation();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [agreed, setAgreed] = useState(true);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  const passwordMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const isFormValid =
    fullName.trim().length >= 2 &&
    email.trim().length > 0 &&
    password.length >= 8 &&
    passwordsMatch &&
    agreed;

  const handleRegister = () => {
    if (!isFormValid) {
      return;
    }

    // We will Add Login Logic Here Later
    console.log('Register:', {
      fullName,
      email,
      password,
    });
  };

  return (
    <View style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode={
            Platform.OS === 'ios' ? 'interactive' : 'on-drag'
          }
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.title}>Create Account</Text>

              <Text style={styles.subtitle}>
                Join us and start your{'\n'}
                fitness journey
              </Text>
            </View>

            {/* Profile image */}
            <View style={styles.avatarSection}>
              <View style={styles.avatarWrapper}>
                <View style={styles.avatar}>
                  <View style={styles.avatarHead} />
                  <View style={styles.avatarBody} />
                </View>

                <TouchableOpacity
                  style={styles.cameraButton}
                  activeOpacity={0.8}
                  accessibilityRole="button"
                  accessibilityLabel="Add profile photo"
                >
                  <Text style={styles.cameraIcon}>+</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.photoTitle}>Add profile photo</Text>

              <Text style={styles.photoSubtitle}>
                Make your profile feel personal
              </Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
              {/* Full name */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Full name</Text>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputIcon}>●</Text>

                  <CustomTextInput
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Enter your full name"
                    placeholderColor="#737A88"
                    autoCapitalize="words"
                    autoCorrect={false}
                    autoComplete="name"
                    textContentType="name"
                    keyboardType="default"
                    returnKeyType="next"
                    onSubmitEditing={() => emailRef.current?.focus()}
                    blurOnSubmit={false}
                    style={styles.input}
                    accessibilityLabel="Full name"
                  />
                </View>
              </View>

              {/* Email */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Email address</Text>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputIcon}>@</Text>

                  <CustomTextInput
                    ref={emailRef}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    placeholderColor="#737A88"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete="email"
                    textContentType="emailAddress"
                    returnKeyType="next"
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    blurOnSubmit={false}
                    style={styles.input}
                    accessibilityLabel="Email address"
                  />
                </View>
              </View>

              {/* Password */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Password</Text>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputIcon}>•</Text>

                  <CustomTextInput
                    ref={passwordRef}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Create a password"
                    placeholderColor="#737A88"
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete="new-password"
                    textContentType="newPassword"
                    keyboardType="default"
                    returnKeyType="next"
                    onSubmitEditing={() => confirmPasswordRef.current?.focus()}
                    blurOnSubmit={false}
                    style={styles.input}
                    accessibilityLabel="Password"
                  />

                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowPassword(prev => !prev)}
                    activeOpacity={0.7}
                    accessibilityRole="button"
                    accessibilityLabel={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                  >
                    <Text style={styles.eyeIcon}>
                      {showPassword ? '◉' : '○'}
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* Password hint */}
                <View style={styles.passwordHintRow}>
                  <View
                    style={[
                      styles.requirementDot,
                      password.length >= 8 && styles.requirementDotActive,
                    ]}
                  />

                  <Text
                    style={[
                      styles.passwordHint,
                      password.length >= 8 && styles.passwordHintActive,
                    ]}
                  >
                    At least 8 characters
                  </Text>
                </View>
              </View>

              {/* Confirm password */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Confirm password</Text>

                <View
                  style={[
                    styles.inputContainer,
                    passwordsMatch && styles.inputContainerSuccess,
                    passwordMismatch && styles.inputContainerError,
                  ]}
                >
                  <Text style={styles.inputIcon}>•</Text>

                  <CustomTextInput
                    ref={confirmPasswordRef}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm your password"
                    placeholderColor="#737A88"
                    secureTextEntry={!showConfirmPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete="new-password"
                    textContentType="newPassword"
                    keyboardType="default"
                    returnKeyType="done"
                    onSubmitEditing={handleRegister}
                    style={styles.input}
                    accessibilityLabel="Confirm password"
                  />

                  <TouchableOpacity
                    style={styles.eyeButton}
                    onPress={() => setShowConfirmPassword(prev => !prev)}
                    activeOpacity={0.7}
                    accessibilityRole="button"
                    accessibilityLabel={
                      showConfirmPassword
                        ? 'Hide confirm password'
                        : 'Show confirm password'
                    }
                  >
                    <Text style={styles.eyeIcon}>
                      {showConfirmPassword ? '◉' : '○'}
                    </Text>
                  </TouchableOpacity>
                </View>

                {passwordsMatch && (
                  <Text style={styles.successText}>✓ Passwords match</Text>
                )}

                {passwordMismatch && (
                  <Text style={styles.errorText}>Passwords do not match</Text>
                )}
              </View>

              {/* Terms */}
              <TouchableOpacity
                style={styles.termsRow}
                onPress={() => setAgreed(prev => !prev)}
                activeOpacity={0.8}
                accessibilityRole="checkbox"
                accessibilityState={{
                  checked: agreed,
                }}
                accessibilityLabel="Agree to terms and privacy policy"
              >
                <View
                  style={[styles.checkbox, agreed && styles.checkboxActive]}
                >
                  {agreed && <Text style={styles.checkmark}>✓</Text>}
                </View>

                <Text style={styles.termsText}>
                  I agree to the{' '}
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                  >
                    <Text style={styles.link}>Terms & Conditions</Text>
                  </TouchableOpacity>{' '}
                  and <Text style={styles.link}>Privacy Policy</Text>
                </Text>
              </TouchableOpacity>

              {/* Sign up */}
              <TouchableOpacity
                style={[
                  styles.signupButton,
                  !isFormValid && styles.signupButtonDisabled,
                ]}
                activeOpacity={0.85}
                onPress={handleRegister}
                disabled={!isFormValid}
                accessibilityRole="button"
                accessibilityLabel="Create account"
                accessibilityState={{
                  disabled: !isFormValid,
                }}
              >
                <Text
                  style={[
                    styles.signupButtonText,
                    !isFormValid && styles.signupButtonTextDisabled,
                  ]}
                >
                  Create Account
                </Text>

                <Text
                  style={[
                    styles.signupArrow,
                    !isFormValid && styles.signupButtonTextDisabled,
                  ]}
                >
                  →
                </Text>
              </TouchableOpacity>
            </View>

            {/* Login */}
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account?</Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel="Login"
              >
                <Text style={styles.loginLink}>Login</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.footerText}>
              Start your journey • Get stronger • Stay consistent
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#090D15',
  },

  keyboardView: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
    backgroundColor: '#090D15',
  },

  scrollContent: {
    flexGrow: 1,
  },

  container: {
    flexGrow: 1,
    backgroundColor: '#090D15',
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 30,
  },

  /* ---------------- HEADER ---------------- */

  header: {
    alignItems: 'flex-start',
  },

  title: {
    color: '#F5F6F8',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.5,
  },

  subtitle: {
    color: '#9298A5',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 7,
  },

  /* ---------------- AVATAR ---------------- */

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
    fontSize: 10,
    marginTop: 3,
  },

  /* ---------------- FORM ---------------- */

  form: {
    width: '100%',
  },

  fieldGroup: {
    marginBottom: 15,
  },

  fieldLabel: {
    color: '#C5C9D1',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 7,
    marginLeft: 2,
  },

  inputContainer: {
    minHeight: 52,
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#151A23',

    borderWidth: 1,
    borderColor: '#292F3A',

    borderRadius: 11,

    paddingLeft: 13,
    paddingRight: 7,
  },

  inputContainerSuccess: {
    borderColor: '#2C8A5A',
  },

  inputContainerError: {
    borderColor: '#A34D5C',
  },

  inputIcon: {
    width: 30,
    color: '#858C9A',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginRight: 5,
  },

  input: {
    flex: 1,
    height: 50,

    color: '#F4F5F7',
    fontSize: 14,

    paddingHorizontal: 4,
    paddingVertical: 0,

    borderWidth: 0,
    backgroundColor: 'transparent',
  },

  eyeButton: {
    width: 44,
    height: 44,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
  },

  eyeIcon: {
    color: '#8D94A2',
    fontSize: 17,
  },

  /* ---------------- PASSWORD HINT ---------------- */

  passwordHintRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 3,
  },

  requirementDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#565D69',
    marginRight: 6,
  },

  requirementDotActive: {
    backgroundColor: '#42B77A',
  },

  passwordHint: {
    color: '#686F7C',
    fontSize: 10,
  },

  passwordHintActive: {
    color: '#42B77A',
  },

  successText: {
    color: '#42B77A',
    fontSize: 10,
    marginTop: 6,
    marginLeft: 3,
  },

  errorText: {
    color: '#D46B7A',
    fontSize: 10,
    marginTop: 6,
    marginLeft: 3,
  },

  /* ---------------- TERMS ---------------- */

  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    marginTop: 1,
    marginBottom: 20,

    paddingVertical: 4,
  },

  checkbox: {
    width: 20,
    height: 20,

    borderRadius: 5,
    borderWidth: 1,

    borderColor: '#565D69',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 9,
  },

  checkboxActive: {
    backgroundColor: '#7041E8',
    borderColor: '#7041E8',
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '800',
  },

  termsText: {
    flex: 1,
    color: '#8F95A1',
    fontSize: 11,
    lineHeight: 18,
  },

  link: {
    color: '#956FF0',
    fontWeight: '600',
  },

  /* ---------------- SIGN UP ---------------- */

  signupButton: {
    minHeight: 52,

    borderRadius: 11,

    backgroundColor: '#7041E8',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#7041E8',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
    shadowRadius: 13,
    elevation: 6,
  },

  signupButtonDisabled: {
    backgroundColor: '#302751',
    shadowOpacity: 0,
    elevation: 0,
  },

  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  signupButtonTextDisabled: {
    color: '#777184',
  },

  signupArrow: {
    color: '#FFFFFF',
    fontSize: 19,
    marginLeft: 10,
    marginTop: -1,
  },

  /* ---------------- LOGIN ---------------- */

  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 31,
  },

  loginText: {
    color: '#858C99',
    fontSize: 12,
  },

  loginLink: {
    color: '#956FF0',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 5,
  },

  footerText: {
    color: '#4E5562',
    fontSize: 9,
    textAlign: 'center',
    marginTop: 21,
    letterSpacing: 0.3,
  },
});
