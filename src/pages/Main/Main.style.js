import styled, { keyframes } from 'styled-components';
import theme from '../../components/theme';

const glassesSpin = keyframes`
		0% {
			left: -500px;
			top: 0px;
			transform: rotate(540deg);
			opacity:0;
		}
		100% {	
			left: 73px;
			top: 156px;
			transform: rotate(11deg);
		}
`;

const appear = keyframes`
	0% {
		opacity:0;
	}
	25%{
		opacity:0.33
	}
	50%{
		opacity:0.7
	}
	75%{
		opacity:0.1
	}
	100% {	
		opacity:1;
	}`;

export const StyledMain = styled.div`
	background: url('/bg.jpg');
	background-size: cover;
	color: ${theme.textPrimary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const StyledImage = styled.img`
	width: 500px;
	height: 500px;
`;

export const StyledText = styled.p`
	animation: ${appear};
	animation-duration: 3s;
	animation-iteration-count: 1;
	font-family: 'Kanit', sans-serif;
	font-size: 10vmin;
	transform: skew(-20deg, 0);
	color: #fc0;
	background-image: linear-gradient(
		#fc938e 20%,
		transparent 25%,
		transparent 27%,
		#fc938e 35%,
		transparent 35%,
		transparent 47%,
		#fc938e 47%,
		#fc938e 52%,
		#fc938e 62%,
		#fc938e 66%,
		transparent 66%,
		transparent 70%,
		#fc938e 70%,
		#fc938e 75%,
		transparent 75%,
		transparent 77%,
		#fc938e 77%
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

export const StyledGlasses = styled.img`
	position: absolute;
	width: 200px;
	left: 73px;
	top: 156px;
	transform: rotate(11deg);
	animation: ${glassesSpin};
	animation-duration: 3s;
	animation-iteration-count: 1;
`;
