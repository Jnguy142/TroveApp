import firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB4q1cKg6WfSg_JPpANjz70aT1W3jB_B28",
  authDomain: "trove-legacy.firebaseapp.com",
  databaseURL: "https://trove-legacy.firebaseio.com",
  projectId: "trove-legacy",
  storageBucket: "trove-legacy.appspot.com",
  messagingSenderId: "707797705319"
}; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase;