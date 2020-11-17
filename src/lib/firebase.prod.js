import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyBIJmzkD3sP9zPWzAJd34mKbVa88R3d4Xg',
  authDomain: 'netflix-clone-61113.firebaseapp.com',
  databaseURL: 'https://netflix-clone-61113.firebaseio.com',
  projectId: 'netflix-clone-61113',
  storageBucket: 'netflix-clone-61113.appspot.com',
  messagingSenderId: '657851466948',
  appId: '1:657851466948:web:5a2da6ef3d44a3ad83f591'
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
