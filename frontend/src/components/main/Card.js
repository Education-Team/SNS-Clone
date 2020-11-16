import React, {useState} from 'react';
import TestImage from './TestImage.jpg';


const Card = () => {
	const [viewflag, setViewflag] = useState(false);
	
	const aTagTestStyle = {
		"cursor" : "pointer",
		"color": "rgba(var(--fe0,0,55,107),1)",
    	"text-decoration": "none"
	}
	
	const mouseEnterEvent = () => {
		setViewflag(true);
	}
	
	const mouseLeaveEvent = () => {
		setViewflag(false);
	}
	
	return (
		<div className="main_card_container">
			<div className="main_card_block" style={{"width" : "100%"}}>
				<a style={aTagTestStyle}>
					<div className="main_card_image_container">
						<div className="main_card_image_block">
							<img className="main_card_image" src={TestImage}/>
						</div>
						<div className="main_card_image_block_2" onMouseEnter={mouseEnterEvent}></div>
					</div>
					<div className="main_card_more_image_block">
						{/*svg 재가공 할 예정*/}
						<svg aria-label="슬라이드" class="main_card_more_image" fill="#ffffff" height="28" viewBox="0 0 48 48" width="28">
							<path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
						</svg>
					</div>
					{/* 카드 커서 포커스시 댓글 및 좋아요 갯수 보기*/}
					{viewflag &&
					<div className="main_card_goodcomment_count_block" style={{"background-color" : "rgba(0, 0, 0, 0.3)"}} onMouseLeave={mouseLeaveEvent}>
						<ul className="main_card_goodcomment_count_ul">
							<li className="main_card_goodcomment_count_li">
								<span>1,683</span>
								<span className="main_card_coreSpriteHeartSmall"></span>
							</li>
							<li className="main_card_goodcomment_count_li">
								<span>18</span>
								<span className="main_card_coreSpriteSpeechBubbleSmall"></span>
							</li>
						</ul>
					</div>
					}
				</a>
			</div>
		</div>
	);
};


export default Card;