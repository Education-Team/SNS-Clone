import React from 'react';
import './style.css';
import DetailImageView from './DetailImageView';

const DetailImageList = ({ resources }) => {
	return (
		<div className="detail_image_list_block">
			<div className="detail_image_list_block2">
				<div
					className="detail_image_list_block3"
					style={{ paddingBottom: '100%' }}
				/>
				<div className="detail_image_list_line_container">
					<div className="detail_image_list_line_block">
						<div className="detail_image_list_line_block2">
							<div className="detail_image_list_line_block3">
								<ul className="detail_image_list_line_ul">
									<li
										style={{
											transform: `translateX(${resources.length * 600 - 1}px)`,
											width: '1px',
										}}
									/>
									{/* 여기서 이미지 리스트 반복 */}
									{resources.map((_item, _index) => (
										<li
											className="detail_image_list_line_li"
											style={{ transform: `translateX(${_index * 600}px)` }}
											key={_item.id}
										>
											<div
												className="detail_image_list_line_li_view"
												style={{ width: '600px' }}
											>
												<DetailImageView imgurl={_item.url} />
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
						{/* 왼쪽,오른쪽 화살표 */}
						<button className="detail_image_list_line_left_button">
							<div className="detail_image_list_line_coreSpriteLeftChevron" />
						</button>
						<button className="detail_image_list_line_right_button">
							<div className="detail_image_list_line_coreSpriteRightChevron" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailImageList;
