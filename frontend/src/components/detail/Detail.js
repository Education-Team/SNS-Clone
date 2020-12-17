import React, { useState } from 'react';
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

const Detail = () => {
	const [data, setData] = useState(DetailData);

	return (
		<Modal>
			<div className="dialog_container">
				{/*사진크기 600일경우 style={{"maxWidth": "815px"}}*/}
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
		</Modal>
	);
};

export default Detail;