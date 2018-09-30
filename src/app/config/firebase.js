import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjDl5f7wypFwz4GoSWaakbyHV0DgbU4ww",
  authDomain: "revents-7d066.firebaseapp.com",
  databaseURL: "https://revents-7d066.firebaseio.com",
  projectId: "revents-7d066",
  storageBucket: "",
  messagingSenderId: "750847114795"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
