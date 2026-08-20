import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      '74713581810-b63mp9r59nf6btinvp43a3k08pfqlk2j.apps.googleusercontent.com',
  });
};
