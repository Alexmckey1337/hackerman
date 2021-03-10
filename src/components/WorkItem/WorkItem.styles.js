import styled from 'styled-components';
import theme from '../theme';

export const StyledWorkItem = styled.div`
	padding: 0 5rem;
	& > :first-child {
		display: flex;
		${(p) => (p.isEven ? 'flex-direction:row-reverse;' : '')};
		${(p) => (p.isEven ? 'justify-content:flex-end;' : '')};
		margin: 2rem;
	}
`;

export const StyledImage = styled.div`
	background: url(${(p) => p.imgSrc});
	background-size: cover;
	background-repeat: no-repeat;
	width: 500px;
	height: 250px;
	transform: skew(-30deg);
`;

export const StyledTextBlock = styled.div`
	${(p) => (p.isEven ? 'margin-right: 3rem' : 'margin-left: 3rem')};
	background: rgba(19, 42, 70, 0.5);
	width: 40%;
	height: 250px;
	transform: skew(-30deg);
	padding: 0 2.875rem 0 2rem;
	& a {
		color: ${theme.textSecondary};
	}
`;

export const StyledPolygon = styled.div`
	width: 50px;
	height: 250px;
	clippath: polygon(31% 0, 100% 0%, 75% 100%, 0% 100%);
	shapemargin: 20px;
	float: left;
`;
