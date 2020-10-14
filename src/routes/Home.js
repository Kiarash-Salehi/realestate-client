import React from 'react';
import Header from '../components/Header';

function Home() {
	document.title = 'مشاورین املاک نارمک';
	return (
		<div>
			<Header />
			<h1>صفحه اصلی</h1>
		</div>
	);
}

export default Home;
