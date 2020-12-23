import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';

// react-slick css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import App from './App';
import Top from './components/top/Top';
import Main from './components/main/Main';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Top />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/explore" component={Main} />
				<Route path="/detail" component={Detail} />
				<Route
					// path 를 따로 정의하지 않으면 모든 상황에 렌더링됨
					render={({ location }) => (
						<div>
							<h2>이 페이지는 존재하지 않습니다:</h2>
							<p>{location.pathname}</p>
						</div>
					)}
				/>
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
