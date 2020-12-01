import React from 'react';
import './style.css';
import testInstarImg from './instar.png';
import testImg from './profile.jpg';
import styled from 'styled-components';


const Top = () => {
	
	const _imgSize = {
		width : "22px", 
		height : "22px",
		cursor : "pointer"
	};
	
	const homeClick = (e) => {
		e.preventDefault();
		alert("홈 클릭");
	}
	
	const allListClick = (e) => {
		e.preventDefault();
		alert("전체 리스트 클릭");
	}
	
	const profileClick = (e) => {
		e.preventDefault();
		alert("프로필 클릭");
	}
	
	return (
		<nav className="top_nav">
			<div className="top_container">
				<div className="top_container_fixed">
					<div className="top_block">
						<div className="top_logo">
							<div style={{"flex-direction": "row"}}>
								<img style={{
										"margin-top": "7px",
										"max-height": "100%", 
										"max-width": "100%", 
										"object-fit": "contain"
									}}
									src={testInstarImg}/>
							</div>
						</div>
						<div className="top_search">
							<input autocapitalize="none" placeholder="검색"/>
						</div>
						<div className="top_button_list">
							<div className="top_button_block">
								<div className="top_button">
									<span style={_imgSize} onClick={homeClick}>
										<img src={testImg}/>
									</span>
								</div>
								<div className="top_button">
									<span style={_imgSize} onClick={allListClick}>
										<img src={testImg}/>
									</span>
								</div>
								<div className="top_button">
									<span style={_imgSize} onClick={profileClick}>
										<img src={testImg}/>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Top;

