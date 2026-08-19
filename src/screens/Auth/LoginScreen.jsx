import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#090D15" />

      <View style={styles.container}>
        {/* Athlete from the supplied reference image */}
        <View style={styles.athleteCrop}>
          <Image
            source={require('../../assets/excercises/images/cover_photo.jpg')}
            style={styles.referenceImage}
            resizeMode="contain"
          />
        </View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Welcome Back! 👋</Text>
          <Text style={styles.subtitle}>
            Log in to continue your{'\n'}fitness journey
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>✉</Text>

            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#9297A3"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>♙</Text>

            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#9297A3"
              secureTextEntry={!showPassword}
              style={styles.input}
            />

            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeButton}
            >
              <Text style={styles.eye}>◉</Text>
            </TouchableOpacity>
          </View>

          {/* Forgot password */}
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Login */}
          <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.line} />
          </View>

          {/* Google */}
          <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
            <Text style={styles.googleLogo}>G</Text>
            <Text style={styles.googleText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>

        {/* Sign up */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Dont have an account? </Text>

          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#090D15',
  },

  container: {
    flex: 1,
    backgroundColor: '#090D15',
    borderWidth: 2,
    borderColor: '#424852',
    overflow: 'hidden',
    paddingHorizontal: 22,
    position: 'relative',
  },

  /* Crop the athlete out of the supplied screenshot */

  referenceImage: {
    position: 'absolute',
    width: '100%',
  },

  header: {
    marginTop: 92,
    zIndex: 2,
  },

  title: {
    color: '#F4F5F7',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.3,
  },

  subtitle: {
    color: '#9A9FAA',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 8,
    fontWeight: '400',
  },

  form: {
    marginTop: 52,
    zIndex: 2,
  },

  inputContainer: {
    height: 46,
    backgroundColor: '#1A1F28',
    borderWidth: 1,
    borderColor: '#2A303A',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    marginBottom: 10,
  },

  inputIcon: {
    color: '#A5AAB5',
    fontSize: 19,
    width: 31,
    textAlign: 'center',
  },

  input: {
    flex: 1,
    color: '#F2F3F5',
    fontSize: 14,
    height: '100%',
    paddingVertical: 0,
  },

  eyeButton: {
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },

  eye: {
    color: '#8F95A1',
    fontSize: 14,
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 3,
    marginBottom: 17,
  },

  forgotText: {
    color: '#A8ACB7',
    fontSize: 12,
  },

  loginButton: {
    height: 46,
    borderRadius: 8,
    backgroundColor: '#7041E8',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#7041E8',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },

  loginText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 22,
  },

  line: {
    height: 1,
    backgroundColor: '#242A34',
    flex: 1,
  },

  orText: {
    color: '#A2A6B0',
    fontSize: 12,
    marginHorizontal: 13,
  },

  googleButton: {
    height: 46,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#292F3A',
    backgroundColor: '#0D1119',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleLogo: {
    color: '#4285F4',
    fontSize: 19,
    fontWeight: '800',
    marginRight: 11,
  },

  googleText: {
    color: '#F1F2F4',
    fontSize: 14,
    fontWeight: '500',
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 43,
    zIndex: 2,
  },

  signupText: {
    color: '#9EA3AE',
    fontSize: 12,
  },

  signupLink: {
    color: '#7848E9',
    fontSize: 12,
    fontWeight: '500',
  },
});
