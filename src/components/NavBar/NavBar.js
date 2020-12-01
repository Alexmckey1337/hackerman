import React, { useContext } from 'react';
import { Link } from 'components';
import { StyledNavBar, StyledProfilePic } from './NavBar.styles';
export * from './NavBar.styles';
import { AuthContext } from '../../firebase/context';
import { uiConfig } from '../../firebase/firebaseui';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';

export const NavBar = () => {
	const { user } = useContext(AuthContext);

	return (
		<StyledNavBar>
			<Link to="/">Главная</Link>
			<Link to="/calc">Калькулятор</Link>
			<Link to="/contacts">Контакты</Link>
			<Link to="/faq">ФАКЬЮ</Link>
			{user ? null : (
				<FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
			)}
			{user ? (
				<StyledProfilePic src={user?.photoURL} alt="user profile pic" />
			) : null}
			{user ? (
				<button
					onClick={() => {
						firebase.auth().signOut();
					}}
				>
					Logout
				</button>
			) : null}
		</StyledNavBar>
	);
};
