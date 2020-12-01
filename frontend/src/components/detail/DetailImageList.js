import React from 'react';
import './style.css'
import DetailImageView from './DetailImageView';

const DetailImageList = () => {
	return (
		<div className="detail_image_list_block">
			<div className="detail_image_list_block2">
				<div className="detail_image_list_block3" style={{"padding-bottom": "100%"}}></div>
				<div className="detail_image_list_line_container">
					<div className="detail_image_list_line_block">
						<div className="detail_image_list_line_block2">
							<div className="detail_image_list_line_block3">
								<ul className="detail_image_list_line_ul">
									<li style={{"transform": "translateX(1199px)", "width": "1px"}}></li>
									{/*여기서 이미지 리스트 반복*/}
									<li className="detail_image_list_line_li" style={{"transform": "translateX(0px)"}}>
										<div className="detail_image_list_line_li_view" style={{"width": "600px"}}>
											<DetailImageView/>
										</div>
									</li>
									<li className="detail_image_list_line_li" style={{"transform": "translateX(600px)"}}>
										<div className="detail_image_list_line_li_view" style={{"width": "600px"}}>
											<DetailImageView/>
										</div>
									</li>
								</ul>
							</div>
						</div>
						{/*왼쪽,오른쪽 화살표*/}
						<button className="detail_image_list_line_left_button">
							<div className="detail_image_list_line_coreSpriteLeftChevron"></div>
						</button>
						<button className="detail_image_list_line_right_button">
							<div className="detail_image_list_line_coreSpriteRightChevron"></div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailImageList;