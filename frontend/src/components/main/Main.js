import React, { useState } from 'react';
import './style.css';
import CardList from './CardList';

import Detail from '../detail/Detail';

const Main = () => {
	const [flag, setFlag] = useState(false);
	const cardListStyle = {
		flexDirection: 'column',
		paddingBottom: '0px',
		paddingTop: '0px',
	};
	const onItemClick = () => {
		setFlag(_flag => !_flag);
	};

	return (
		<>
			<main className="main_container">
				<div className="main_block">
					<div className="main_list_block">
						<div style={cardListStyle}>
							{/* 여기서부터 데이터 가져오기 리스트당 6개 카드씩 이기때문에 카드리스트도 분할 */}
							<CardList onItemClick={onItemClick} />
							<CardList onItemClick={onItemClick} />
						</div>
					</div>
				</div>
			</main>
			{flag ? <Detail modal onItemClick={onItemClick} /> : ''}
		</>
	);
};

export default Main;
