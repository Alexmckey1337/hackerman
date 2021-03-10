import React from 'react';
import {
	StyledFooter,
	StyledPageLink,
	StyledFooterWrapper,
	StyledAllRights
} from './Footer.styles';
export * from './Footer.styles';

export const Footer = () => {
	return (
		<StyledFooter>
			<StyledFooterWrapper>
				<StyledPageLink to="/">Alex Yakubin</StyledPageLink>
				<StyledPageLink to="/mywork">My Work</StyledPageLink>
				<StyledPageLink to="/contacts">Contact me</StyledPageLink>
				<StyledAllRights>
					All right reserved {new Date().getFullYear()}
				</StyledAllRights>
			</StyledFooterWrapper>
		</StyledFooter>
	);
};
