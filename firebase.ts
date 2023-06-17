import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvJHtLWSqDUaEknfEgSiOiN18rIWavCJ0",
  authDomain: "gpt-clone-48cb4.firebaseapp.com",
  projectId: "gpt-clone-48cb4",
  storageBucket: "gpt-clone-48cb4.appspot.com",
  messagingSenderId: "536475667104",
  appId: "1:536475667104:web:28415f7c336b2deefdd7c5"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db};