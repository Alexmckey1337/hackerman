/* eslint-disable no-mixed-spaces-and-tabs */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

export const app = firebase.app.length
	? firebase.initializeApp({
		apiKey: 'AIzaSyArFVcJBPqNOf9r34G93igz4mRiY7ucJoU',
		authDomain: 'hackerman-ff76d.firebaseapp.com',
		projectId: 'hackerman-ff76d',
		storageBucket: 'hackerman-ff76d.appspot.com',
		messagingSenderId: '891713837719',
		appId: '1:891713837719:web:0cfc1b0ce393ed81bc67d2'
	  })
	: null;
