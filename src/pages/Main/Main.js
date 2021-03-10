import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {
	StyledMain,
	StyledImage,
	StyledText,
	StyledGlasses
} from './Main.style';

export const Main = () => {
	useEffect(() => {
		firebase
			.app()
			.auth()
			.signInAnonymously()
			.then((result) => {
				console.log(result.user);
				setUser(result.user);
			});
	}, []);

	const [user, setUser] = useState();
	console.log(user);
	return (
		<StyledMain>
			<h1>Hi, my name is:</h1>
			<h2>Alex Yakubin</h2>
			<div style={{ position: 'relative' }}>
				<StyledImage src="/me.png"></StyledImage>
				<StyledGlasses src="/1.png"></StyledGlasses>
			</div>

			<StyledText>HACKERMAN</StyledText>
		</StyledMain>
	);
};
