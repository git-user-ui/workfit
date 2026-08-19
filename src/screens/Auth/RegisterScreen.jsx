import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const RegisterScreen = () => {
  const [agreed, setAgreed] = useState(true);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0E16" />

      <View style={styles.container}>
        {/* Header */}
        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>
          Join us and start your{'\n'}fitness journey
        </Text>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <View style={styles.avatarHead} />
            <View style={styles.avatarBody} />
          </View>

          <TouchableOpacity style={styles.cameraButton}>
            <Text style={styles.cameraIcon}>▣</Text>
          </TouchableOpacity>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Full Name */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>♙</Text>

            <TextInput
              value={fullName}
              onChangeText={setFullName}
              placeholder="Full Name"
              placeholderTextColor="#979CA7"
              style={styles.input}
            />
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>✉</Text>

            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#979CA7"
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
              placeholderTextColor="#979CA7"
              secureTextEntry
              style={styles.input}
            />

            <Text style={styles.eyeIcon}>◉</Text>
          </View>

          {/* Confirm Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputIcon}>♙</Text>

            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor="#979CA7"
              secureTextEntry
              style={styles.input}
            />

            <Text style={styles.eyeIcon}>◉</Text>
          </View>

          {/* Terms */}
          <View style={styles.termsRow}>
            <TouchableOpacity
              style={[styles.checkbox, agreed && styles.checkboxActive]}
              onPress={() => setAgreed(!agreed)}
              activeOpacity={0.8}
            >
              {agreed && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>

            <View style={styles.termsTextContainer}>
              <Text style={styles.termsText}>
                I agree to the{' '}
                <Text style={styles.link}>Terms & Conditions</Text>
              </Text>

              <Text style={styles.termsText}>
                and <Text style={styles.link}>Privacy Policy</Text>
              </Text>
            </View>
          </View>

          {/* Sign Up */}
          <TouchableOpacity style={styles.signupButton} activeOpacity={0.8}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        {/* Login */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>

          <TouchableOpacity>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A0E16',
  },

  container: {
    flex: 1,
    backgroundColor: '#0A0E16',
    paddingHorizontal: 30,
    paddingTop: 12,
  },

  title: {
    color: '#F4F5F7',
    fontSize: 19,
    fontWeight: '700',
    marginTop: 4,
  },

  subtitle: {
    color: '#9A9FAA',
    fontSize: 11.5,
    lineHeight: 17,
    marginTop: 7,
  },

  /* Avatar */
  avatarContainer: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#B9BFCE',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },

  avatarHead: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#7F8799',
    marginTop: 10,
  },

  avatarBody: {
    width: 28,
    height: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#7F8799',
    marginTop: 3,
  },

  cameraButton: {
    position: 'absolute',
    right: -4,
    bottom: -2,
    width: 23,
    height: 23,
    borderRadius: 12,
    backgroundColor: '#7040E7',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#8D68ED',
  },

  cameraIcon: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },

  /* Form */
  form: {
    width: '100%',
  },

  inputContainer: {
    height: 32,
    borderRadius: 6,
    backgroundColor: '#1A1F28',
    borderWidth: 1,
    borderColor: '#292F39',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 7,
  },

  inputIcon: {
    color: '#A6ABB6',
    fontSize: 15,
    width: 23,
    textAlign: 'center',
  },

  input: {
    flex: 1,
    height: '100%',
    paddingVertical: 0,
    color: '#F2F3F5',
    fontSize: 10.5,
  },

  eyeIcon: {
    color: '#9298A4',
    fontSize: 10,
    width: 19,
    textAlign: 'center',
  },

  /* Terms */
  termsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 7,
    marginBottom: 13,
  },

  checkbox: {
    width: 12,
    height: 12,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#5E6470',
    marginTop: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxActive: {
    backgroundColor: '#7040E7',
    borderColor: '#7040E7',
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 9,
    lineHeight: 11,
    fontWeight: '700',
  },

  termsTextContainer: {
    marginLeft: 6,
  },

  termsText: {
    color: '#A4A8B2',
    fontSize: 9.5,
    lineHeight: 15,
  },

  link: {
    color: '#8959EF',
  },

  /* Button */
  signupButton: {
    height: 34,
    borderRadius: 6,
    backgroundColor: '#7040E7',
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#7040E7',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },

  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 10.5,
    fontWeight: '600',
  },

  /* Bottom Login */
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  loginText: {
    color: '#969BA6',
    fontSize: 10,
  },

  loginLink: {
    color: '#8959EF',
    fontSize: 10,
    fontWeight: '500',
  },
});
