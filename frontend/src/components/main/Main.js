import React from 'react';
import './style.css';
import CardList from './CardList';

const Main = () => {
	const cardListStyle = {
		"flex-direction": "column",
    	"padding-bottom": "0px",
    	"padding-top": "0px"
	}
	
	return (
		<main className="main_container">
			<div className="main_block">
				<div className="main_list_block">
					<div style={cardListStyle}>
						{/* 여기서부터 데이터 가져오기 */}
						<CardList />
						<CardList />
					</div>
				</div>
			</div>
		</main>
	);
}

export default Main;