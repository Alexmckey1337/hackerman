import styled from 'styled-components';
import theme from '../../components/theme';

export const StyledMain = styled.div`
	background: url('/bg.jpg');
	background-size: cover;
	color: ${theme.textPrimary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
