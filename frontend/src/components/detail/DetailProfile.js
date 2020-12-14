import React from 'react'
import './style.css';

const DetailProfile = (props) => {
	
	const imageCanvas = {
		position: "absolute",
		top: "-5px",
		left: "-5px",
		width: "42px",
		height: "42px"
	}
		
	return (
		<div className="detail_head_profile_image_container">
			<div className={`detail_head_profile_image_block ${props.chk ? 'detail_profile_margin' : ''}`} aria-disabled="true">
				<canvas className="detail_head_profile_image_canvas" height="42" width="42" style={imageCanvas}></canvas>
				<a className="detail_head_profile_image_root" style={{"width": "32px", "height": "32px"}}>
					<img className="detail_head_profile_image" data-testid="user-avatar" draggable="false" src={props.imgurl}/>
				</a>
			</div>
		</div>
	);
}

export default DetailProfile;