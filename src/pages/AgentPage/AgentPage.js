import React, { useContext, useState } from 'react';
import { AuthContext } from '../../firebase/context';
import { app } from '../../firebase/firebase.js';
import { Button } from 'components';
import { StyledForm, StyledLabel } from './AgentFile.styles';

export const AgentPage = () => {
	const { user } = useContext(AuthContext);
	const firestore = app.firestore();
	const storage = app.storage().ref();
	const [formValue, setFormValue] = useState({
		title: '',
		desc: '',
		imgSrc: ''
	});
	const handleChange = (e) => {
		setFormValue((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsDisabled(!isDisabled);
		if (isFileInputActive) {
			const fileRef = storage.child(file.name);
			fileRef.put(file).then(
				() => {
					fileRef.getDownloadURL().then((url) => {
						firestore
							.collection('MyWork')
							.add({
								title: formValue.title,
								desc: formValue.desc,
								imgSrc: url,
								dateTime: new Date()
							})
							.then(
								() => {
									setFormValue({ title: '', desc: '', imgSrc: '' });
									setIsDisabled(false);
								},
								(err) => {
									alert(`not success ${err}`);
									setFormValue({ title: '', desc: '', imgSrc: '' });
									setIsDisabled(false);
								}
							);
					});
				},
				() => {
					console.log('failure');
				}
			);
		} else {
			firestore
				.collection('MyWork')
				.add({
					title: formValue.title,
					desc: formValue.desc,
					imgSrc: formValue.imgSrc,
					dateTime: new Date()
				})
				.then(
					() => {
						setFormValue({ title: '', desc: '', imgSrc: '' });
						setIsDisabled(false);
					},
					(err) => {
						alert(`not success ${err}`);
						setFormValue({ title: '', desc: '', imgSrc: '' });
						setIsDisabled(false);
					}
				);
		}
	};
	const [file, setFile] = useState();
	const [isFileInputActive, setIsFileInputActive] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);
	return (
		<div>
			{user ? <img src={user?.photoURL} alt="user profile pic" /> : null}
			<StyledForm
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<StyledLabel>
					Title
					<input
						type="text"
						required
						value={formValue.title}
						name="title"
						onChange={handleChange}
					/>
				</StyledLabel>
				<StyledLabel>
					Description
					<textarea
						type="text"
						required
						name="desc"
						value={formValue.desc}
						onChange={handleChange}
						style={{ width: '500px' }}
					/>
				</StyledLabel>
				<Button
					onClick={(e) => {
						e.preventDefault();
						setIsFileInputActive(!isFileInputActive);
					}}
					text={
						isFileInputActive
							? 'I want to provide url'
							: 'I want to upload file'
					}
				/>
				{isFileInputActive ? (
					<StyledLabel>
						Select file from your drive (optional)
						<input
							type="file"
							onChange={(e) => {
								setFile(e.target.files[0]);
							}}
							name="file"
						/>
					</StyledLabel>
				) : (
					<StyledLabel>
						Image link (optional)
						<input
							type="text"
							name="imgSrc"
							value={formValue.imgSrc}
							onChange={handleChange}
						/>
					</StyledLabel>
				)}
				<Button
					disabled={isDisabled}
					variant="outlined"
					text="Submit"
					type="submit"
				/>
			</StyledForm>
			<div>{formValue.title}</div>
			<div>{formValue.desc}</div>
			<div>{formValue.imgSrc}</div>
		</div>
	);
};
