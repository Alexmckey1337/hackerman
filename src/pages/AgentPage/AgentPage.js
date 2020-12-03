import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../firebase/context';
import { uiConfig } from '../../firebase/firebaseui';
import { FirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Button } from 'components';

export const AgentPage = () => {
	const { user } = useContext(AuthContext);
	const firestore = firebase.firestore();
	const [formValue, setFormValue] = useState('');
	const [users] = useCollectionData(
		firestore.collection('users').orderBy('createdAt')
	);
	const [activeChat, setActiveChat] = useState();
	const [messages] = useCollectionData(
		firestore.collection(`users/${activeChat}/messages`).orderBy('createdAt')
	);
	const sendMessage = async (e) => {
		e.preventDefault();
		await firestore.collection(`users/${activeChat}/messages`).add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid: user?.uid
		});
	};
	const handleChatClick = (user) => {
		setActiveChat(user.id);
	};
	useEffect(() => {}, []);

	return (
		<div>
			<FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

			{user ? <img src={user?.photoURL} alt="user profile pic" /> : null}
			{user ? (
				<button
					onClick={() => {
						firebase.auth().signOut();
					}}
				>
					Logout
				</button>
			) : null}
			<button
				onClick={() => {
					console.log(users, messages);
				}}
			>
				sadasd
			</button>
			<form onSubmit={sendMessage}>
				<input
					value={formValue}
					onChange={(e) => {
						setFormValue(e.target.value);
					}}
				/>
				<Button variant="outlined" text="Submit" type="submit" />
			</form>
			<div
				style={{
					width: '100%',
					height: 'auto',
					border: '1px solid red',
					display: 'flex'
				}}
			>
				<div style={{ width: '16rem' }}>
					{users &&
						users?.map((user, i) => {
							return (
								<button key={i} onClick={() => handleChatClick(user)}>
									{user.id}
								</button>
							);
						})}
				</div>
				<div>
					<div>
						{messages &&
							messages?.map((message, i) => {
								return (
									<div
										key={i}
										style={{ display: 'flex', alignItems: 'center' }}
									>
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
											<p style={{ backgroundColor: 'yellow' }}>
												{message?.text}
											</p>
										) : (
											<p style={{ backgroundColor: 'pink' }}>{message?.text}</p>
										)}
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</div>
	);
};
