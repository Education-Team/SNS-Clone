import React from 'react';
import DetailProfile from './DetailProfile';
import './style.css';

const DetailSideContents = () => {
	return (
		//내용
		<div className="detail_side_view_container">
			<li className="detail_side_view_block">
				<div className="detail_side_view">
					<div className="detail_side_my_contents_container">
						<DetailProfile chk="true"/>
						<div className="detail_side_content_root">
							<h2 className="detail_side_content_profile_container">
								<div className="detail_side_content_profile_block">
									<span className="detail_side_content_profile_span">
										<a className="detail_side_content_profile_name">
											TestName
										</a>
									</span>
								</div>
							</h2>
							<span class="">테스트 내용 입니다.</span>
							<div className="detail_side_content_footer_container">
								<div className="detail_side_content_footer_block">
									<time className="detail_side_content_footer_time" datetime="2020-09-16T04:29:47.000Z" title="2020년 9월 16일">10주</time>	
								</div>
							</div>
						</div>
					</div>
				</div>
			</li>
		</div>
	);
}

const DetailSideCommnt = () => {
	return (
		<div className="detail_side_view_container">
			<li className="detail_side_view_block_2">
				<div className="detail_side_view">
					<div className="detail_side_commnt_container">
						<DetailProfile chk="true"/>
						<div className="detail_side_content_root">
							<h2 className="detail_side_content_profile_container">
								<div className="detail_side_content_profile_block">
									<span className="detail_side_content_profile_span">
										<a className="detail_side_content_profile_name">
											TestName-댓글
										</a>
									</span>
								</div>
							</h2>
							<span class="">코멘트 테스트 내용 입니다.</span>
							<div className="detail_side_content_footer_container">
								<div className="detail_side_content_footer_block">
									<a className="detail_side_commnt_time_a">
										<time className="detail_side_content_footer_time" datetime="2020-09-16T04:29:47.000Z" title="2020년 9월 16일">10주</time>
									</a>
									<button className="detail_side_commnt_button">좋아요 1개</button>
									<button className="detail_side_commnt_button">답글 달기</button>
								</div>
							</div>
						</div>
					</div>
					<span className="detail_side_commnt_good_container">
						<div className="detail_side_commnt_good_block">
							<button className="detail_side_commnt_good_button">
								<div className="detail_side_commnt_good_root">
									<span>
									<svg aria-label="좋아요" class="detail_side_commnt_good_image" fill="#262626" height="12" viewBox="0 0 48 48" width="12"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>	
									</span>
								</div>
							</button>
						</div>
					</span>
				</div>
			</li>
		</div>
	);
}

const DetailSideFooter = () => {
	return (
		<>
		<section className="detail_side_footer_button_container">
			<span className="detail_side_footer_good_span">
				<button className="detail_side_footer_good_button">
					<div className="detail_side_footer_good_root">
						<span>
							<svg aria-label="좋아요" class="detail_side_footer_good_image" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
						</span>
					</div>
				</button>
			</span>
			<span class="detail_side_footer_comment_span">
				<button class="detail_side_footer_comment_button " type="button">
					<div class="detail_side_footer_comment_root ">
						<svg aria-label="댓글 달기" class="_8-detail_side_footer_comment_image " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
					</div>
				</button>
			</span>
		</section>
		<section className="detail_side_footer_good_count_container">
			<div className="detail_side_footer_good_count_block">
				<div className="detail_side_footer_good_count_root">
					<button className="detail_side_footer_good_count_button">
						좋아요<span>1,610</span>개
					</button>
				</div>
			</div>
		</section>
		<div className="detail_side_footer_time_container">
			<a className="detail_side_footer_time_a">
				<time className="detail_side_footer_time" datetime="2020-11-29T15:30:24.000Z" title="2020년 11월 30일">1일 전</time>
			</a>
		</div>
		<section className="detail_side_footer_comment_input_container">
			<div className="detail_side_footer_comment_input_block">
				<form className="detail_side_footer_comment_input_form" method="POST">
					<textarea class="detail_side_footer_comment_input_textarea" aria-label="댓글 달기..." placeholder="댓글 달기..." autocomplete="off" autocorrect="off" style={{"height": "18px"}}>
					</textarea>
					<button className="detail_side_footer_comment_input_button" disabled={true} type="submit">게시</button>
				</form>
			</div>
		</section>
		</>
	);
}


const DetailSide = () => {
	return (
		<React.Fragment>
			<div className="detail_side_contents_container">
				<ul className="detail_side_contents_ul">
					<DetailSideContents/>
					{/*반복할 댓글*/}
					<ul className="detail_side_commnt_ul">
						<DetailSideCommnt/>
					</ul>
					<ul className="detail_side_commnt_ul">
						<DetailSideCommnt/>
					</ul>
					<ul className="detail_side_commnt_ul">
						<DetailSideCommnt/>
					</ul>
					<ul className="detail_side_commnt_ul">
						<DetailSideCommnt/>
					</ul>
					<li>
						<div className="detail_side_commnts_view_more">
							<button className="detail_side_commnts_view_more_button">
								<span aria-label="댓글 더 읽어들이기" class="detail_side_commnts_view_more_glyphsSpriteCircle_add"></span>
							</button>
						</div>
					</li>
				</ul>
			</div>
			<DetailSideFooter/>
		</React.Fragment>
	);
}

export default DetailSide;