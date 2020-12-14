import React from 'react';
import './style.css';
import CardList from './CardList';
import Right from './Right';

const Home = () => {
  const cardData = [
    {
      index: 1,
      id: 'deejaysoda111',
      contents:
        '슈팅스타챌린지 비디오 다들 너무 이쁘고 귀여워!!😭💖💕<br></br>' +
        'Luv all the <a className="xil3i" href="/explore/tags/shootingstarchallenge/" tabindex="0">#ShootingStarChallenge</a> vids 🌟💫💕<br></br><br></br>' +
        '🎵DJ SODA - SHOOTING STAR',
      like: '13821',
      commentCnt: '54',
    },
    {
      index: 2,
      id: 'deejaysoda222',
      contents: '테스트 데이터222',
      like: '13821',
      commentCnt: '54',
    },
    {
      index: 3,
      id: 'deejaysoda333',
      contents: '테스트 데이터333',
      like: '13821',
      commentCnt: '54',
    },
    {
      index: 4,
      id: 'deejaysoda444',
      contents: '테스트 데이터444',
      like: '13821',
      commentCnt: '54',
    },
    {
      index: 5,
      id: 'deejaysoda555',
      contents: '테스트 데이터555',
      like: '13821',
      commentCnt: '54',
    },
  ];
  const commentData = [
    {
      index: 1,
      id: 'rudybundini',
      comment: '<a className="notranslate" href="/ncaptraa/" tabindex="0">@ncaptraa</a> 🙄',
    },
    {
      index: 2,
      id: 'testid',
      comment: '테스트입니다',
    },
  ];

  return (
    <home className="SCxLW o64aR">
      <section className="_1SP8R C3uDN j9XKR">
        {/* 여기서부터 데이터 가져오기 */}
        <CardList cardData={cardData} commentData={commentData} />
        <Right />
      </section>
    </home>
  );
};

export default Home;
