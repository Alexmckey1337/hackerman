import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../theme';

export const StyledLink = styled(Link)`
	color: ${theme.textSecondary};
	text-decoration: none;
	transition: all 0.2s ease-in;
	&:hover {
		text-decoration: underline;
	}
`;
