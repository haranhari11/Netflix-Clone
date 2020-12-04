import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyA9f1csaY8yXHA5QpvQoCNUJnnmbTuV_z4',
  authDomain: 'netflix-clone-edcb1.firebaseapp.com',
  databaseURL: 'https://netflix-clone-edcb1.firebaseio.com',
  projectId: 'netflix-clone-edcb1',
  storageBucket: 'netflix-clone-edcb1.appspot.com',
  messagingSenderId: '736825104173',
  appId: '1:736825104173:web:c2d8cacb44a3afc18a65a4',
  measurementId: 'G-650ENJ3VTG',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
