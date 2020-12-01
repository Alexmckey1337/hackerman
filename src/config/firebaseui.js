import firebase from 'firebase';

export const uiConfig = {
	signInFlow: 'popup',
	signInSuccessUrl: '/faq',
	signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
};
