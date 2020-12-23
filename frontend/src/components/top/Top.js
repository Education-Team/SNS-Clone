import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import testInstarImg from './instar.png';
import testImg from './profile.jpg';

const Top = () => {
	const imgSize = {
		width: '22px',
		height: '22px',
		cursor: 'pointer',
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
									<Link to="/" tabIndex="0">
										<svg
											aria-label="홈"
											className="top_button_svg"
											fill="#262626"
											height="22"
											viewBox="0 0 48 48"
											width="22"
										>
											<path d="M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z" />
										</svg>
									</Link>
								</div>
								<div className="top_button">
									<Link to="/explore/" tabIndex="0">
										<svg
											aria-label="사람 찾기"
											className="top_button_svg"
											fill="#262626"
											height="22"
											viewBox="0 0 48 48"
											width="22"
										>
											<path
												clipRule="evenodd"
												d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
												fillRule="evenodd"
											/>
										</svg>
									</Link>
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
