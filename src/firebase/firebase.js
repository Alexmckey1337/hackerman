/* eslint-disable no-mixed-spaces-and-tabs */
import firebase from 'firebase';
import 'firebase/auth';

export const app = firebase.app.length
	? firebase.initializeApp({
		apiKey: 'AIzaSyCxnZfNasYVfUnCZT8DIVg-9zXQfbqhFLE',
		authDomain: 'dominvest-73638.firebaseapp.com',
		databaseURL: 'https://dominvest-73638.firebaseio.com',
		projectId: 'dominvest-73638',
		storageBucket: 'dominvest-73638.appspot.com',
		messagingSenderId: '887011249427',
		appId: '1:887011249427:web:1b89bd5dcf335011bc9ee6',
		measurementId: 'G-GP9MP3KPLV'
	  })
	: null;
