import React from 'react';
import Card from './Card';

const CardList = () => {
	return (
		<div className="main_cardlist_container">
			{/* 가지고 온 데이터로 main_card_container자체 요소를 반복하여 가공하기 */}
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default CardList;
