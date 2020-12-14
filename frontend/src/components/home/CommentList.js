import React from 'react';
import Comment from './Comment';

const CommentList = ({ commentData }) => {
  return (
    <div className="comment_list">
      {/* 댓글 데이터 반복 가공 */}
	  {commentData.map((element) => (
        <Comment commentData={element} />
      ))}
    </div>
  );
};

export default CommentList;
