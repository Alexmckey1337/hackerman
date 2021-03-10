import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'components';

export const StyledFooter = styled.footer`
	width: 100%;
	height: 9rem;
	background-color: ${theme.primary};
	position: relative;
`;

export const StyledFooterWrapper = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-around;
	max-width: 20rem;
`;

export const StyledPageLink = styled((props) => <Link {...props} />)`
	font-size: 1.5rem;
	margin: 0 1.5rem;
`;

export const StyledAllRights = styled.p`
	position: absolute;
	bottom: 0;
	right: 0;
	margin: 0 1rem 1rem 0;
	color: ${theme.textPrimary};
`;
