import React from 'react';
import './style.css';
import TestImage from './TestImage.jpg';

const DetailImageView = () => {
	
	return (
		<div className="detail_image_view_container">
			<div className="detail_image_view_block">
				<div className="detail_image_view_block_image" style={{"padding-bottom": "100%"}}>
					<img className="detail_image_view_block_image_root" sizes="600px" src={TestImage} style={{"object-fit": "cover"}}/>
				</div>
				<div className="detail_image_view_block_image2"></div>
			</div>
		</div>
	);
}

export default DetailImageView;