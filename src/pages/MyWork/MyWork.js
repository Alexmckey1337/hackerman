import React, { useContext } from 'react';
import { StyledMain } from './MyWork.style';
import { AuthContext } from '../../firebase/context';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';
import { WorkItem } from 'components';

export const MyWork = () => {
	const { user } = useContext(AuthContext);
	const firestore = firebase.firestore();
	const [works] = useCollectionData(
		firestore.collection('MyWork').orderBy('dateTime')
	);

	return (
		<StyledMain>
			{console.log(user)}
			<h2>My work history</h2>
			<div>
				{works &&
					works?.map((el, i) => {
						return (
							<WorkItem
								workObj={el}
								key={i}
								isEven={i % 2 !== 0 ? true : false}
							/>
						);
					})}
			</div>
			<h2>To be continued...</h2>
		</StyledMain>
	);
};
