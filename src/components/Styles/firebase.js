import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions'

const config = {
	apiKey: "AIzaSyCQuZoXusa7EqGQdCmmoQAi4DegvYs-GvY",
	authDomain: "easyword.firebaseapp.com",
	databaseURL: "https://easyword.firebaseio.com",
	projectId: "easyword",
	storageBucket: "easyword.appspot.com",
	messagingSenderId: "306976829495",
	appId: "1:306976829495:web:c38717ace4dccb27f7cfb2",
	measurementId: "G-G5BSTPZ0LH"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true,
};
firestore.settings(settings);

export default firebase;

export {firestore};