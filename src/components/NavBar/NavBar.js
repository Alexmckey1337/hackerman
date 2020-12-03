import React from 'react';
import { Link } from 'components';
import { StyledNavBar } from './NavBar.styles';
export * from './NavBar.styles';

export const NavBar = () => {
	return (
		<StyledNavBar>
			<Link to="/">Главная</Link>
			<Link to="/calc">Калькулятор</Link>
			<Link to="/contacts">Контакты</Link>
			<Link to="/faq">ФАКЬЮ</Link>
		</StyledNavBar>
	);
};
