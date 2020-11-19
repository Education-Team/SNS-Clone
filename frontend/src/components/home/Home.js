import React from 'react';
import './style.css';
import CardList from './CardList';
import Right from './Right';

const Home = () => {
	const cardListStyle = {
		"flex-direction": "column",
    	"padding-bottom": "0px",
    	"padding-top": "0px"
	}
	
	return (
		<home className="SCxLW o64aR">
			<section className="_1SP8R C3uDN j9XKR">
				{/* 여기서부터 데이터 가져오기 */}
				<CardList />
				<Right />
			</section>
		</home>
	);
}

export default Home;