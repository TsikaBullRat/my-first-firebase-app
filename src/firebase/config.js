import firebase from 'firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCluF3yZihyQM3DxUp1Xc1KrNR3Km8WT1c",
    authDomain: "new-firbase-native-app.firebaseapp.com",
    projectId: "new-firbase-native-app",
    storageBucket: "new-firbase-native-app.appspot.com",
    messagingSenderId: "663760241250",
    appId: "1:663760241250:web:16893cf8a6d90ff522073b",
    measurementId: "G-D0HX2CM9FT"
  };

  firebase.initializeApp(firebaseConfig);

export {firebase} 
