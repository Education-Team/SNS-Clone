import React from 'react';
import Comment from './Comment';

const CommentList = ({ commentsData }) => {
	return (
		<div className="comment_list">
			{/* 댓글 데이터 반복 가공 */}
			{commentsData &&
				commentsData.map(element => (
					<Comment commentData={element} key={element._id} />
				))}
		</div>
	);
};

export default CommentList;
