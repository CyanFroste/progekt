import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDbwnr1t0n72EyPl8vYVYuLh_Si1bh2PfU",
  authDomain: "progekt-14.firebaseapp.com",
  databaseURL: "https://progekt-14.firebaseio.com",
  projectId: "progekt-14",
  storageBucket: "progekt-14.appspot.com",
  messagingSenderId: "384048838965",
  appId: "1:384048838965:web:6ff01a6dfe5dbf998ef47c",
  measurementId: "G-WGQ2K2L7JW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

const storage = firebase.storage();

export {
  storage, 
  firebase as default
}
