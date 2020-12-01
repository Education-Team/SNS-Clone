import React from 'react';
import Comment from './Comment';

const CommentList = () => {
	
	return (
		<div className="comment_list">
			{/* 댓글 데이터 반복 가공 */}
			<Comment />
			<Comment />
		</div>
	);
}

export default CommentList;