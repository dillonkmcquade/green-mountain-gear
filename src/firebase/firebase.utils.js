import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtIUW1Kg1lfdPu7lBj7RSRYTvgGs5SMrY",
  authDomain: "green-mountain-gear.firebaseapp.com",
  databaseURL: "https://green-mountain-gear.firebaseio.com",
  projectId: "green-mountain-gear",
  storageBucket: "green-mountain-gear.appspot.com",
  messagingSenderId: "806851228157",
  appId: "1:806851228157:web:063ddd7bf7844272da2994",
  measurementId: "G-PHENRSS68V"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const collectionRef = firestore.collection("users");
  const collectionSnapshot = await collectionRef.get();
  console.log({ collection: collectionSnapshot.docs.map(doc => doc.data()) });

  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(obj.title);
    batch.set(newDocRef, obj);
  });

  return await batch.commit(); 
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
