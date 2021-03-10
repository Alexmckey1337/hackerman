import React from 'react';
import { StyledNavBar, StyledNameLink, StyledPageLink } from './NavBar.styles';
export * from './NavBar.styles';

export const NavBar = () => {
	return (
		<StyledNavBar>
			<StyledNameLink to="/">Alex Yakubin</StyledNameLink>
			<StyledPageLink to="/mywork">My Work</StyledPageLink>
			<StyledPageLink to="/contacts">Contact me</StyledPageLink>
		</StyledNavBar>
	);
};
