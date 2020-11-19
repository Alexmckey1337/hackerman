import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledInputWrapper, StyledInput, StyledSelect } from './Input.styles';

export const Input = ({ value, type = 'input' }) => {
	const [inputValue, setInputValue] = useState(value);
	const [selectValue, setSelectValue] = useState();

	return (
		<StyledInputWrapper>
			{inputValue}
			{type === 'input' && (
				<StyledInput
					type="text"
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
				/>
			)}
			{type === 'select' && (
				<StyledSelect
					onChange={(e) => {
						setSelectValue(e.target.value);
					}}
					value={selectValue}
				>
					<option value="value1">value1</option>
					<option value="value2">value2</option>
				</StyledSelect>
			)}
		</StyledInputWrapper>
	);
};

Input.propTypes = {
	value: PropTypes.string,
	type: PropTypes.oneOf(['input', 'select'])
};
