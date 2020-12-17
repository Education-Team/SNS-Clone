import React from 'react';
import './style.css';
import styled from 'styled-components';
import testInstarImg from './instar.png';
import testImg from './profile.jpg';

const Top = () => {
	const imgSize = {
		width: '22px',
		height: '22px',
		cursor: 'pointer',
	};

	const homeClick = e => {
		e.preventDefault();
		alert('홈 클릭');
	};

	const allListClick = e => {
		e.preventDefault();
		alert('전체 리스트 클릭');
	};

	const profileClick = e => {
		e.preventDefault();
		alert('프로필 클릭');
	};

	return (
		<nav className="top_nav">
			<div className="top_container">
				<div className="top_container_fixed">
					<div className="top_block">
						<div className="top_logo">
							<div style={{ flexDirection: 'row' }}>
								<img
									style={{
										marginTop: '7px',
										maxHeight: '100%',
										maxWidth: '100%',
										objectFit: 'contain',
									}}
									src={testInstarImg}
									alt="img"
								/>
							</div>
						</div>
						<div className="top_search">
							<input autoCapitalize="none" placeholder="검색" />
						</div>
						<div className="top_button_list">
							<div className="top_button_block">
								<div className="top_button">
									<span style={imgSize} onClick={homeClick}>
										<img src={testImg} alt="img" />
									</span>
								</div>
								<div className="top_button">
									<span style={imgSize} onClick={allListClick}>
										<img src={testImg} alt="img" />
									</span>
								</div>
								<div className="top_button">
									<span style={imgSize} onClick={profileClick}>
										<img src={testImg} alt="img" />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Top;
