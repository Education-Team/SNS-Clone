import React from 'react';
import './style.css';

const DetailImageView = ({ imgurl }) => {
	return (
		<div className="detail_image_view_container">
			<div className="detail_image_view_block">
				<div
					className="detail_image_view_block_image"
					style={{ paddingBottom: '100%' }}
				>
					<img
						className="detail_image_view_block_image_root"
						sizes="600px"
						src={imgurl}
						style={{ objectFit: 'cover' }}
						alt="detailimage"
					/>
				</div>
				<div className="detail_image_view_block_image2" />
			</div>
		</div>
	);
};

export default DetailImageView;
