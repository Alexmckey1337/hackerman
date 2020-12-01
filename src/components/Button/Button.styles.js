import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 304px;
	height: 76px;
	background-color: ${(p) =>
		p.variant === 'contained' ? '#c4c4c4' : 'inherit'};
	color: ${(p) => {
		p.variant === 'contained' ? '#000000' : '#c4c4c4';
	}};
	border-radius: 15px;
`;
