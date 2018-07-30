import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDZHsdI5A5x_f75m4MgYZCO7WRft03IkNw",
    authDomain: "diary-e8b5f.firebaseapp.com",
    databaseURL: "https://diary-e8b5f.firebaseio.com",
    projectId: "diary-e8b5f",
    storageBucket: "diary-e8b5f.appspot.com",
    messagingSenderId: "321003594246"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/notes');

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();


