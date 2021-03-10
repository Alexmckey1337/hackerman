import styled from 'styled-components';
import theme from '../../components/theme';

export const StyledContacts = styled.div`
	color: ${theme.textSecondary};
	background: url(/bg.jpg);
	background-size: cover;
	padding: 4rem;
`;

export const StyledSvg = styled.svg`
	width: 50px;
	height: 50px;
	background: ${(p) => p.color};
	background-image: url(${(p) => p.src});
	background-size: cover;
	border-radius: 50%;
`;

export const StyledSocialLink = styled.a`
	position: relative;
	display: inline-flex;
	align-items: center;
	padding: 15px 30px;
	color: ${theme.textSecondary};
	text-transform: uppercase;
	letter-spacing: 4px;
	text-decoration: none;
	font-size: 24px;
	overflow: hidden;
	transition: 0.2s;
	&:hover {
		color: #2f1749;
		background: ${theme.textSecondary};
		box-shadow: 0 0 10px ${theme.textSecondary},
			0 0 40px ${theme.textSecondary}, 0 0 80px ${theme.textSecondary};
	}
`;

export const StyledGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 4rem 0rem;
	grid-template-areas:
		'linkedin . instagram . telegram'
		'. mail . github .';
	.linkedin {
		grid-area: linkedin;
	}
	.instagram {
		grid-area: instagram;
	}
	.telegram {
		grid-area: telegram;
	}
	.mail {
		grid-area: mail;
	}
	.github {
		grid-area: github;
	}
`;
