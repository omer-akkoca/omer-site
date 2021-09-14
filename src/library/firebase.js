import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    //your firebse config
  };

firebase.initializeApp(firebaseConfig);

const projectFireStore = firebase.firestore(); 

export { projectFireStore }