import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDLSibYOnCxWH5uUkpj1BFkAdwXGyS5AQ8",
  authDomain: "netflix-clone-68046.firebaseapp.com",
  projectId: "netflix-clone-68046",
  storageBucket: "netflix-clone-68046.appspot.com",
  messagingSenderId: "369346335414",
  appId: "1:369346335414:web:1564852ff4a41a94714c17"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//firestore stores the data in the cloud
const db = firebaseApp.firestore();

const auth = firebase.auth(); 

export { auth };
export default db;