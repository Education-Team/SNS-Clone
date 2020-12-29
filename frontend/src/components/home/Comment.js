import React, { useState } from 'react';

const Comment = ({ commentData }) => {
	const { comment_id, comment } = commentData;

	const [state, setState] = useState({ goodFlag: false });

	// 좋아요 이벤트
	const goodEvent = () => {
		if (state.goodFlag) {
			setState({ ...state, goodFlag: false });
		} else {
			setState({ ...state, goodFlag: true });
		}
	};

	return (
		<div className="cGcGK">
			{/* 댓글 */}
			<div className="Igw0E rBNOH eGOV_ ybXk5 _4EzTm pjcA_">
				<div
					className="QzzMF Igw0E IwRSH eGOV_ vwCYk"
					data-testid="post-comment-root"
				>
					<span className="Jv7Aj mArmR MqpiF">
						<a
							className="FPmhX notranslate MBL3Z"
							title={comment_id}
							href={comment_id}
							tabIndex="0"
						>
							{comment_id}
						</a>
					</span>
					&nbsp;
					<span className="_8Pl3R">
						<span>{comment}</span>
					</span>
				</div>
				<span>
					<div className="_2ic5v">
						<button className="wpO6b ZQScA" type="button" onClick={goodEvent}>
							{state.goodFlag === false ? (
								<div className="QBdPU">
									<span className="FY9nT">
										<svg
											aria-label="좋아요"
											className="_8-yf5 "
											fill="#262626"
											height="12"
											viewBox="0 0 48 48"
											width="12"
										>
											<path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
										</svg>
									</span>
								</div>
							) : (
								<div className="QBdPU">
									<span className="FY9nT">
										<svg
											aria-label="좋아요 취소"
											className="_8-yf5 "
											fill="#ed4956"
											height="12"
											viewBox="0 0 48 48"
											width="12"
										>
											<path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
										</svg>
									</span>
								</div>
							)}
						</button>
					</div>
				</span>
			</div>
		</div>
	);
};

export default Comment;
