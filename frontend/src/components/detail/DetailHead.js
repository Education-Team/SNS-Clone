import React from 'react';
import DetailProfile from './DetailProfile';
import './style.css';

const DetailHead = () => {
	
	return (
		<>
			<DetailProfile/>
			<div className="detail_head_profile_name_container">
				<div className="detail_head_profile_name_block">
					<div className="detail_head_profile_name_root">
						<span className="detail_head_profile_name_span">
							<a href="#" className="detail_head_profile_name">
								TestName
							</a>
						</span>
					</div>
					<div className="detail_head_profile_follow_root">
						<span className="detail_head_profile_follow_point">•</span>
						<button className="detail_head_profile_follow" type="button">팔로우</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default DetailHead;