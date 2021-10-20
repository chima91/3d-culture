import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcaCwPXi3F4a0uz3JGkMZNIy3i9PmVNS8",
  authDomain: "react-3d-f49c6.firebaseapp.com",
  projectId: "react-3d-f49c6",
  storageBucket: "react-3d-f49c6.appspot.com",
  messagingSenderId: "419875646774",
  appId: "1:419875646774:web:ab2657b7d6289c74d59797",
  measurementId: "G-GCMW5GDSDY"
};

// apiKeyでfirebaseパッケージを初期化
firebase.initializeApp(firebaseConfig);

export const fireAuth = firebase.auth();
export const storage = firebase.storage();

// 初期化済みのfirebaseパッケージをexport
export default firebase;