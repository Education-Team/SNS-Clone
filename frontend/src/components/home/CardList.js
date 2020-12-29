import React from 'react';
import Card from './Card';

const CardList = ({ cardsData }) => {
	return (
		<div className="cGcGK">
			{/* 가지고 온 데이터로 main_card_container자체 요소를 반복하여 가공하기 */}
			{cardsData.map(element => (
				<Card cardData={element} />
			))}
		</div>
	);
};

export default CardList;
