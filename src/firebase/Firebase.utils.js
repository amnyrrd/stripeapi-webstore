import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBM2G8Ue319MJaRn5l6_wo7_Q_hVWWT3b0',
  authDomain: 'stripeapi-webstore.firebaseapp.com',
  databaseURL: 'https://stripeapi-webstore.firebaseio.com',
  projectId: 'stripeapi-webstore',
  storageBucket: 'stripeapi-webstore.appspot.com',
  messagingSenderId: '425002453444',
  appId: '1:425002453444:web:c4222ee6cffeb868f17c91',
  measurementId: 'G-WVPMYMHLNS',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creatinguser', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
