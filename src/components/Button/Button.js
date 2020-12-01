import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

export * from './Button.styles';

export const Button = ({
	text,
	variant = 'contained',
	disabled = false,
	onClick
}) => {
	return (
		<StyledButton onClick={onClick} variant={variant} disabled={disabled}>
			{text}
		</StyledButton>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	variant: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func
};
