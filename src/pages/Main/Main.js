import React from 'react';
import { Button, Text, Link } from 'components';

export const Main = () => {
	return (
		<div>
			<Button text="I am outlined" variant="outlined" />
			<Button text="I am contained" variant="contained" />
			<Text type="BodyText">Text</Text>
			<Text type="Heading1">Heading1</Text>
			<Text type="Heading2">h2</Text>
			<Text type="Heading3">h3</Text>
			<Link to="/faq">To FAQ</Link>
		</div>
	);
};
