import firebase from 'firebase';

/* TODO: troque pelos seus dados */
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);
window.firebase = firebase;
