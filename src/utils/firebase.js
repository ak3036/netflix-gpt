// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD2xJ4rDLGpQwCi1NzwmVPxfvcK6HJaoZk',
  authDomain: 'netflixgpt-7175b.firebaseapp.com',
  projectId: 'netflixgpt-7175b',
  storageBucket: 'netflixgpt-7175b.appspot.com',
  messagingSenderId: '431407452896',
  appId: '1:431407452896:web:6a76dd404b5accd1ad3685',
  measurementId: 'G-30V8P9TBMR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
