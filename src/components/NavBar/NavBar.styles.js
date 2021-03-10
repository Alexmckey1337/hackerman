import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'components';

//background: linear-gradient(90deg, rgba(21,10,35,1) 0%, rgba(53,20,91,1) 50%, rgba(21,10,35,1) 100%);
export const StyledNavBar = styled.div`
	background-color: ${theme.primary};
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 0 3rem;
	font-family: 'Lato', sans-serif;
`;

export const StyledProfilePic = styled.img`
	border-radius: 50%;
	height: 2.5rem;
	width: 2.5rem;
`;

export const StyledNameLink = styled((props) => <Link {...props} />)`
	margin-right: auto;
	font-size: 2rem;
`;

export const StyledPageLink = styled((props) => <Link {...props} />)`
	font-size: 1.5rem;
	margin: 0 1.5rem;
`;
