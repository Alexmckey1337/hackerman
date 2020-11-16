import React from "react";
import PropTypes from "prop-types";
import StyledTexts from "./Text.styles";

export * from "./Text.styles";

export const Text = ({ type, children, ...restProps }) => {
	const StyledText = StyledTexts[type];
	if (!children) {
		return null;
	}
	return (
		<StyledText type={type} {...restProps}>
			{children}
		</StyledText>
	);
};

Text.propTypes = {
	type: PropTypes.string,
	children: PropTypes.node
};
