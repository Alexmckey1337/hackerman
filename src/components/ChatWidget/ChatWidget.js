/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { StyledFab, StyledWidget, StyledInput } from './ChatWidget.styles';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export const ChatWidget = ({ user }) => {
	const [isWidgetShown, setWidgetShown] = useState(false);
	const [inputValue, setInputValue] = useState();

	const handleFabClick = () => {
		setWidgetShown(!isWidgetShown);
	};
	const handleNewUserMessage = async (e) => {
		e.preventDefault();
		firestore.collection('users').doc(user?.uid).set({
			id: user?.uid,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		});
		await userRef.add({
			text: inputValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid: user?.uid
		});
	};

	const firestore = firebase.firestore();
	const userRef = firestore
		.collection('users')
		.doc(user?.uid)
		.collection('messages');
	const query = userRef.orderBy('createdAt').limit(25);

	const [messages] = useCollectionData(query, { idField: 'id' });

	return (
		<div style={{ overflow: 'hidden', position: 'relative' }}>
			<StyledFab onClick={handleFabClick}>Fab</StyledFab>
			{isWidgetShown && (
				<StyledWidget>
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
										<p style={{ backgroundColor: 'pink' }}>
											{message?.text}
										</p>
									)}
								</div>
							);
						})}
					<form>
						<StyledInput
							value={inputValue}
							onChange={(e) => {
								setInputValue(e.target.value);
							}}
						/>
						<button onClick={handleNewUserMessage}>{'=>'}</button>
					</form>
					{inputValue}
				</StyledWidget>
			)}
		</div>
	);
};

ChatWidget.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func
};
