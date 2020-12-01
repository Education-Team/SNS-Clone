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
						{/* 여기서부터 데이터 가져오기 리스트당 6개 카드씩 이기때문에 카드리스트도 분할 */}
						<CardList />
						<CardList />
					</div>
				</div>
			</div>
		</main>
	);
}

export default Main;