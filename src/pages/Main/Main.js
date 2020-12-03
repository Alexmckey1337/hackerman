import React, { useState, useEffect } from 'react';
import { Button, Text, Link, RcSlider, Input } from 'components';
import { Widget } from 'react-chat-widget';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'react-chat-widget/lib/styles.css';

import { useCollectionData } from 'react-firebase-hooks/firestore';

export const Main = () => {
	useEffect(() => {
		firebase
			.app()
			.auth()
			.signInAnonymously()
			.then((result) => {
				setUser(result.user);
			});
		console.log(messages);
	}, []);

	const [user, setUser] = useState();
	const [formValue, setFormValue] = useState('');
	const handleNewUserMessage = (newMessage) => {
		console.log(`New message incoming! ${newMessage}`);
		// Now send the message throught the backend API
	};

	const firestore = firebase.firestore();
	const userRef = firestore
		.collection('users')
		.doc(user?.uid)
		.collection('messages');
	const query = userRef.orderBy('createdAt').limit(25);

	const [messages] = useCollectionData(query, { idField: 'id' });
	const [users] = useCollectionData(firestore.collection('users'));

	const sendMessage = async (e) => {
		e.preventDefault();
		firestore.collection('users').doc(user?.uid).set({
			id: user?.uid,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		});
		await userRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid: user?.uid
		});

		setFormValue('');
	};

	return (
		<div>
			<Button
				text="I am outlined"
				variant="outlined"
				onClick={() => {
					console.log(users);
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
			<Widget handleNewUserMessage={handleNewUserMessage} />
			<div>
				{messages &&
					messages?.map((message, i) => {
						return (
							<div key={i} style={{ display: 'flex', alignItems: 'center' }}>
								<img
									src={message?.photoURL}
									style={{
										borderRadius: '50%',
										width: '2rem',
										height: '2rem',
										marginRight: '0.5rem'
									}}
								/>
								{message.uid === user?.uid ? (
									<p style={{ backgroundColor: 'yellow' }}>{message?.text}</p>
								) : (
									<p style={{ backgroundColor: 'pink' }}>{message?.text}</p>
								)}
							</div>
						);
					})}
			</div>
			<form onSubmit={sendMessage}>
				<input
					value={formValue}
					onChange={(e) => {
						setFormValue(e.target.value);
					}}
				/>
				<Button variant="outlined" text="Submit" type="submit" />
			</form>
		</div>
	);
};
