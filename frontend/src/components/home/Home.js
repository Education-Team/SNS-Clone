import React, { useEffect, useState } from 'react';
import './style.css';
import CardList from './CardList';
import Right from './Right';
import * as api from '../../lib/api';

const Home = () => {
	const [cardList, setCardList] = useState([]);
	const postData = async () => {
		try {
			const data = await api.getPosts();
			setCardList(...cardList, data);
		} catch (err) {
			console.log('에러발생');
			console.log(err);
		}
	};

	useEffect(() => {
		postData();
	}, []);

	// const cardsData = [
	// 	{
	// 		index: 1,
	// 		id: 'deejaysoda111',
	// 		contents:
	// 			'슈팅스타챌린지 비디오 다들 너무 이쁘고 귀여워!!😭💖💕' +
	// 			'Luv all the #ShootingStarChallenge vids 🌟💫💕' +
	// 			'🎵DJ SODA - SHOOTING STAR',
	// 		like: '13821',
	// 		commentCnt: '54',
	// 		comment: [
	// 			{
	// 				index: 1,
	// 				id: 'rudybundini',
	// 				comment: '@ncaptraa 🙄',
	// 			},
	// 			{
	// 				index: 2,
	// 				id: 'testid',
	// 				comment: '테스트입니다',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		index: 2,
	// 		id: 'deejaysoda222',
	// 		contents: '테스트 데이터222',
	// 		like: '13821',
	// 		commentCnt: '54',
	// 		comment: [
	// 			{
	// 				index: 1,
	// 				id: 'rudybundini',
	// 				comment: '@ncaptraa 🙄',
	// 			},
	// 			{
	// 				index: 2,
	// 				id: 'testid',
	// 				comment: '테스트입니다',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		index: 3,
	// 		id: 'deejaysoda333',
	// 		contents: '테스트 데이터333',
	// 		like: '13821',
	// 		commentCnt: '54',
	// 	},
	// 	{
	// 		index: 4,
	// 		id: 'deejaysoda444',
	// 		contents: '테스트 데이터444',
	// 		like: '13821',
	// 		commentCnt: '54',
	// 	},
	// 	{
	// 		index: 5,
	// 		id: 'deejaysoda555',
	// 		contents: '테스트 데이터555',
	// 		like: '13821',
	// 		commentCnt: '54',
	// 	},
	// ];

	return (
		<div className="SCxLW o64aR">
			<section className="_1SP8R C3uDN j9XKR">
				{/* 여기서부터 데이터 가져오기 */}
				<CardList cardsData={cardList} />
				<Right />
			</section>
		</div>
	);
};

export default Home;
