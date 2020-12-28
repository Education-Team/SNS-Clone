import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from '../utils/Modal';
import DetailHead from './DetailHead';
import DetailImageList from './DetailImageList';
// import DetailImageView from './DetailImageView';
import DetailSide from './DetailSide';

import TestImage from './TestImage.jpg';
import './style.css';

const DetailData = {
	id: '1',
	username: 'TestName',
	profile_img_url: TestImage,
	text: '테스트 내용 입니다.',
	timestamp: 1607555506, // 밀리초
	preview_like: 3,
	display_resources: [
		{
			id: 1,
			url: TestImage,
		},
		{
			id: 2,
			url: TestImage,
		},
		{
			id: 3,
			url: TestImage,
		},
	],
	commnt: [
		{
			id: 1,
			username: 'TestName-댓글',
			profile_img_url: TestImage,
			liked_count: 1,
			text: '코멘트 테스트 내용 입니다.1',
			created_at: 1603405566, // 밀리초
		},
		{
			id: 2,
			username: 'TestName-댓글',
			profile_img_url: TestImage,
			liked_count: 2,
			text: '코멘트 테스트 내용 입니다.2',
			created_at: 1603405566, // 밀리초
		},
	],
};

const Detail = ({ history, modal, onItemClick }) => {
	const [data, setData] = useState(DetailData);
	const subhistory = history || useHistory();

	const onExitClick = () => {
		if (modal) {
			subhistory.replace('/explore');
			onItemClick();
		} else {
			subhistory.push('/');
		}
	};

	return (
		<Modal>
			<div className="dialog_container">
				{/* 사진크기 600일경우 style={{"maxWidth": "815px"}} */}
				<div className="detail_container">
					<article className="detail_article_block">
						<header className="detail_header_block">
							<DetailHead data={data} />
						</header>
						<div className="detail_image_container">
							<DetailImageList resources={data.display_resources} />
						</div>
						<div className="detail_side_container">
							<DetailSide data={data} />
						</div>
					</article>
				</div>
			</div>
			<div className="dialog_exit_container">
				<button
					className="dialog_exit_button"
					type="button"
					onClick={onExitClick}
				>
					<div className="dialog_exit_button_block">
						<svg
							aria-label="닫기"
							className="dialog_exit_button_svg"
							fill="#ffffff"
							height="24"
							viewBox="0 0 48 48"
							width="24"
						>
							<path
								clipRule="evenodd"
								d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z"
								fillRule="evenodd"
							/>
						</svg>
					</div>
				</button>
			</div>
		</Modal>
	);
};

export default Detail;
