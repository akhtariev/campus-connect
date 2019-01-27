import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCvDZpuzmSpRCWuGTfX6BA5gee9KXdP_4s",
    authDomain: "react-app-a849c.firebaseapp.com",
    databaseURL: "https://react-app-a849c.firebaseio.com",
    projectId: "react-app-a849c",
    storageBucket: "react-app-a849c.appspot.com",
    messagingSenderId: "757919067858"
};
var fire = firebase.initializeApp(config);
export default fire;