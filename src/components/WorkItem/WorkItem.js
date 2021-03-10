import React from 'react';
import {
	StyledWorkItem,
	StyledImage,
	StyledTextBlock,
	StyledPolygon
} from './WorkItem.styles';
import PropTypes from 'prop-types';

export const WorkItem = ({ workObj, isEven }) => {
	return (
		<StyledWorkItem isEven={isEven}>
			{workObj && (
				<div>
					<StyledImage imgSrc={workObj.imgSrc} />
					<StyledTextBlock isEven={isEven}>
						<StyledPolygon />
						<p style={{ transform: 'skew(30deg)' }}>{workObj.title}</p>
						<p
							dangerouslySetInnerHTML={{ __html: workObj.desc }}
							style={{ transform: 'skew(30deg)' }}
						/>
					</StyledTextBlock>
				</div>
			)}
		</StyledWorkItem>
	);
};

WorkItem.propTypes = {
	workObj: PropTypes.object,
	isEven: PropTypes.bool
};
