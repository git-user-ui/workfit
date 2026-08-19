import React, { useRef, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, UNIQUE_VALUE } from '../../constants';
import CustomTextInput from '../../components/common/CustomInput';
import ButtonComponent from '../../components/common/ButtonComponent';

// Assets
import Eye from '../../assets/icons/eye-outline.svg';
import EyeOff from '../../assets/icons/eye-off-outline.svg';
import LockClosed from '../../assets/icons/lock-closed-outline.svg';
import Mail from '../../assets/icons/mail-outline.svg';

const LoginScreen = () => {
  const navigation = useNavigation();

  const passwordRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login:', { email, password });
  };

  const isDarkmode = useColorScheme() === 'dark';
  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle={isDarkmode ? 'light-content' : 'dark-content'} />

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
              <Text style={styles.title}>Welcome Back! 👋</Text>

              <Text style={styles.subtitle}>
                Log in to continue your{'\n'}
                fitness journey
              </Text>

              {/* Image below text */}
              <View style={styles.imageCard}>
                <Image
                  source={require('../../assets/excercises/images/cover_photo.jpg')}
                  style={styles.referenceImage}
                  resizeMode="cover"
                  accessibilityLabel="Fitness training"
                />

                <View style={styles.imageOverlay} />

                <View style={styles.imageBadge}>
                  <Text style={styles.imageBadgeText}>STAY CONSISTENT</Text>
                </View>
              </View>
            </View>

            {/* Form */}
            <View style={styles.form}>
              {/* Email */}
              <View style={styles.fieldGroup}>
                <Text style={styles.fieldLabel}>Email address</Text>

                <View style={styles.inputContainer}>
                  <Text style={styles.inputIcon}>@</Text>

                  <CustomTextInput
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
                    placeholder="Enter your password"
                    placeholderColor="#737A88"
                    keyboardType="default"
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    autoComplete="password"
                    textContentType="password"
                    returnKeyType="done"
                    onSubmitEditing={handleLogin}
                    style={styles.input}
                    accessibilityLabel="Password"
                  />

                  <TouchableOpacity
                    onPress={() => setShowPassword(prev => !prev)}
                    style={styles.eyeButton}
                    activeOpacity={0.7}
                    accessibilityRole="button"
                    accessibilityLabel={
                      showPassword ? 'Hide password' : 'Show password'
                    }
                    accessibilityState={{
                      selected: showPassword,
                    }}
                  >
                    {showPassword ? (
                      <Eye style={styles.eye} />
                    ) : (
                      <EyeOff style={styles.eye} />
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* Forgot password */}
              <TouchableOpacity
                style={styles.forgotButton}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel="Forgot password"
              >
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>

              {/* Login */}
              <ButtonComponent
                title="Login"
                onPress={handleLogin}
                rightIcon={<Text style={styles.loginArrow}>→</Text>}
              />
              {/* Divider */}
              <View style={styles.dividerRow}>
                <View style={styles.line} />

                <Text style={styles.orText}>OR</Text>

                <View style={styles.line} />
              </View>

              {/* Google */}
              <TouchableOpacity
                style={styles.googleButton}
                activeOpacity={0.8}
                accessibilityRole="button"
                accessibilityLabel="Continue with Google"
              >
                <View style={styles.googleLogoContainer}>
                  <Text style={styles.googleLogo}>G</Text>
                </View>

                <Text style={styles.googleText}>Continue with Google</Text>
              </TouchableOpacity>

              {/* Security note */}
              <View style={styles.securityRow}>
                <Text style={styles.securityIcon}>🔒</Text>

                <Text style={styles.securityText}>
                  Your information is secure and encrypted
                </Text>
              </View>
            </View>

            {/* Sign up */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account?</Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel="Sign up"
              >
                <Text style={styles.signupLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.footerText}>
              Train smarter • Stay stronger • Be consistent
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

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
    paddingTop: 55,
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
    fontWeight: '400',
  },

  /* ---------------- IMAGE ---------------- */

  imageCard: {
    width: '100%',
    height: 145,
    marginTop: 24,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#151A23',
    borderWidth: 1,
    borderColor: '#252B36',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 6,
  },

  referenceImage: {
    width: '100%',
    height: '100%',
  },

  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(9, 13, 21, 0.28)',
  },

  imageBadge: {
    position: 'absolute',
    left: 14,
    bottom: 14,
    backgroundColor: 'rgba(112, 65, 232, 0.92)',
    paddingHorizontal: 11,
    paddingVertical: 6,
    borderRadius: 7,
  },

  imageBadgeText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },

  /* ---------------- FORM ---------------- */

  form: {
    marginTop: 30,
  },

  fieldGroup: {
    marginBottom: 16,
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
    paddingRight: 8,
  },

  inputIcon: {
    width: 30,
    color: '#858C9A',
    fontSize: 18,
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

  eye: {
    color: '#8D94A2',
    fontSize: 18,
  },

  /* ---------------- FORGOT ---------------- */

  forgotButton: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 2,
    marginTop: -4,
    marginBottom: 18,
  },

  forgotText: {
    color: '#9D79F1',
    fontSize: 12,
    fontWeight: '600',
  },

  /* ---------------- LOGIN ---------------- */

  loginButton: {
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

  loginText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  loginArrow: {
    color: '#FFFFFF',
    fontSize: 19,
    marginLeft: 10,
    marginTop: -1,
  },

  /* ---------------- DIVIDER ---------------- */

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#252B35',
  },

  orText: {
    color: '#737A87',
    fontSize: 10,
    fontWeight: '700',
    marginHorizontal: 13,
    letterSpacing: 1,
  },

  /* ---------------- GOOGLE ---------------- */

  googleButton: {
    minHeight: 52,

    borderRadius: 11,

    borderWidth: 1,
    borderColor: '#292F3A',

    backgroundColor: '#10151E',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleLogoContainer: {
    width: 27,
    height: 27,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  googleLogo: {
    color: '#4285F4',
    fontSize: 20,
    fontWeight: '800',
  },

  googleText: {
    color: '#E8EAF0',
    fontSize: 14,
    fontWeight: '600',
  },

  /* ---------------- SECURITY ---------------- */

  securityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
  },

  securityIcon: {
    fontSize: 11,
    marginRight: 6,
  },

  securityText: {
    color: '#686F7D',
    fontSize: 10,
  },

  /* ---------------- SIGN UP ---------------- */

  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 35,
  },

  signupText: {
    color: '#858C99',
    fontSize: 12,
  },

  signupLink: {
    color: '#956FF0',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 5,
  },

  footerText: {
    color: '#4E5562',
    fontSize: 9,
    textAlign: 'center',
    marginTop: 22,
    letterSpacing: 0.3,
  },
});
