import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';
import { findeOneCity, findArea } from '../utils/finderFuncs';

function Home() {
	document.title = 'مشاورین املاک نارمک';
	const [option, setOption] = useState('buy');
	const [city, setCity] = useState('');
	const [area, setArea] = useState('');
	return (
		<div>
			<Header />
			<div className="home__hero">
				<h1>جست و جوی خانه ها</h1>
				<div className="home__searchSection">
					<div className="home__searchOptionButtons">
						<button onClick={() => setOption('buy')}>خرید</button>
						<button onClick={() => setOption('rent')}>رهن و اجاره</button>
					</div>
					<div className="home__searchForm">
						<form>
							<label>
								<input type="search" name="providence" onChange={e => {
									findeOneCity(e.target.value);
									setCity(e.target.value);
								}} value={city} placeholder="استان" className="home__searchInput" />
								{/* <div className="home__searchDropdown">
									Hello
								</div> */}
							</label>
							<input type="search" name="city" onChange={e => {
								setArea(e.target.value);
								findArea(city, e.target.value);
							}} value={area} placeholder="شهر" className="home__searchInput" />
							<button type="submit" className="home__submitBtn"><i className="fas fa-search"></i></button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
