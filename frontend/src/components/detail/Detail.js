import React from 'react';
import Modal from '../utils/Modal';
import DetailHead from './DetailHead';
import DetailImageList from './DetailImageList';
// import DetailImageView from './DetailImageView';
import DetailSide from './DetailSide';

import './style.css'

const Detail = () => {
	
	return (
		<Modal>
			<div className="dialog_container">
				{/*사진크기 600일경우 style={{"max-width": "815px"}}*/}
				<div className="detail_container">
					<article className="detail_article_block">
						<header className="detail_header_block">
							<DetailHead/>
						</header>
						<div className="detail_image_container">
							<DetailImageList/>
						</div>
						<div className="detail_side_container">
							<DetailSide/>
						</div>
					</article>
				</div>
			</div>
		</Modal>
	);
}

export default Detail;


