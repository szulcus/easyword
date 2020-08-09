/* eslint-disable */
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
	apiKey: "AIzaSyCQuZoXusa7EqGQdCmmoQAi4DegvYs-GvY",
	authDomain: "easyword.firebaseapp.com",
	databaseURL: "https://easyword.firebaseio.com",
	projectId: "easyword",
	storageBucket: "easyword.appspot.com",
	messagingSenderId: "306976829495",
	appId: "1:306976829495:web:c38717ace4dccb27f7cfb2",
	measurementId: "G-G5BSTPZ0LH"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
	const title = "Hello World!"
	const options = {
		body: payload.data.status,
	}
	return window.self.ServiceWorkerRegistration.showNotification(title, options)
})