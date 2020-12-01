import React from 'react';
import { Link } from 'components';
import { StyledNavBar } from './NavBar.styles';
export * from './NavBar.styles';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig } from '../../config/firebaseui';
import firebase from 'firebase';

export const NavBar = () => {
	return (
		<StyledNavBar>
			<Link to="/">Главная</Link>
			<Link to="/calc">Калькулятор</Link>
			<Link to="/contacts">Контакты</Link>
			<Link to="/faq">ФАКЬЮ</Link>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
		</StyledNavBar>
	);
};
