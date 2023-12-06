import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyALfDWa8lVpZ99xmHVmwucW3uAeC3R2ebA",
    authDomain: "libraryapp-9d786.firebaseapp.com",
    projectId: "libraryapp-9d786",
    storageBucket: "libraryapp-9d786.appspot.com",
    messagingSenderId: "1010134080503",
    appId: "1:1010134080503:web:174db66d2f1d584bd6acf2"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();