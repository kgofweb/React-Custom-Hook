import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyChITMyW4DCXMYsL5XguiGVTdM-rwrHnyk",
  authDomain: "test-task-ef330.firebaseapp.com",
  projectId: "test-task-ef330",
  storageBucket: "test-task-ef330.appspot.com",
  messagingSenderId: "486799950178",
  appId: "1:486799950178:web:3bc1c3566c64b8cb09ac3b",
  measurementId: "G-QJLG85CF2H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db