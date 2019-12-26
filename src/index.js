import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
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
firebase.firestore().settings({})

ReactDOM.render(
	<App />,
	document.getElementById('root')
	);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
