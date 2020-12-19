import React, { useState, useEffect } from 'react';
import { Button, Text, Link, RcSlider, Input, ChatWidget } from 'components';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const Main = () => {
	useEffect(() => {
		firebase
			.app()
			.auth()
			.signInAnonymously()
			.then((result) => {
				setUser(result.user);
			});
	}, []);

	const [user, setUser] = useState();

	return (
		<div>
			<Button
				text="I am outlined"
				variant="outlined"
				onClick={() => {
					console.log('');
				}}
			/>
			<Button text="I am contained" variant="contained" />
			<Text type="BodyText">Text</Text>
			<Text type="Heading1">Heading1</Text>
			<Text type="Heading2">h2</Text>
			<Text type="Heading3">h3</Text>
			<Link to="/faq">To FAQ</Link>
			<RcSlider />
			<Input />
			<Input type="select" />
			<Text type="BodyText">Hi,my name is {user?.uid}</Text>
			<ChatWidget text="asdasdasd" user={user} />
		</div>
	);
};
