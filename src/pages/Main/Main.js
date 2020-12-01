import React, { useContext, useState } from 'react';
import { Button, Text, Link, RcSlider, Input } from 'components';
import { AuthContext } from '../../firebase/context';
import { Widget } from 'react-chat-widget';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'react-chat-widget/lib/styles.css';

import { useCollectionData } from 'react-firebase-hooks/firestore';

export const Main = () => {
	const { user } = useContext(AuthContext);
	const [formValue, setFormValue] = useState('');
	const handleNewUserMessage = (newMessage) => {
		console.log(`New message incoming! ${newMessage}`);
		// Now send the message throught the backend API
	};

	const firestore = firebase.firestore();
	const messagesRef = firestore.collection('messages');
	const query = messagesRef.orderBy('createdAt').limit(25);

	const [messages] = useCollectionData(query, { idField: 'id' });

	const sendMessage = async (e) => {
		e.preventDefault();

		const { uid, photoURL } = user;

		await messagesRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL
		});

		setFormValue('');
	};

	return (
		<div>
			<Button text="I am outlined" variant="outlined" />
			<Button text="I am contained" variant="contained" />
			<Text type="BodyText">Text</Text>
			<Text type="Heading1">Heading1</Text>
			<Text type="Heading2">h2</Text>
			<Text type="Heading3">h3</Text>
			<Link to="/faq">To FAQ</Link>
			<RcSlider />
			<Input />
			<Input type="select" />
			<Text type="BodyText">Hi,my name is {user?.displayName}</Text>
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
								<p>{message?.text}</p>
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
