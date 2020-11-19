import React, { useState } from 'react';
import { StyledSlider } from './Slider.styles';
export * from './Slider.styles';

export const RcSlider = ({ value = 25 }) => {
	const [sliderValue, setSliderValue] = useState(value);

	return (
		<div>
			<p>{sliderValue + ' рублей'}</p>
			<StyledSlider
				min={0}
				max={120}
				value={sliderValue}
				handleStyle={{
					height: 32,
					width: 6,
					marginTop: -14,
					backgroundColor: 'red',
					border: 0,
					borderRadius: 0
				}}
				onChange={(value) => {
					setSliderValue(value);
				}}
			/>
		</div>
	);
};
