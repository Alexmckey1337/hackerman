import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './Link.styles';
export * from './Link.styles';

export const Link = ({ to, children, className }) => {
	return (
		<StyledLink className={className} to={to}>
			{children}
		</StyledLink>
	);
};

Link.propTypes = {
	to: PropTypes.string,
	children: PropTypes.string,
	className: PropTypes.string
};
