import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Home.css';
import { findOneCity, findProvidence } from '../utils/finderFuncs';

function Home() {
	document.title = 'مشاورین املاک نارمک';
	const [option, setOption] = useState('buy');
	const [cities, setCities] = useState([]);
	const [city, setCity] = useState('');
	const [providences, setProvidences] = useState([]);
	const [providence, setProvidence] = useState('');
	const searchFormSubmitHandler = e => {
		e.preventDefault();
		console.log('submit clicked');
	};
	return (
		<div>
			<Header />
			<div className="home__hero">
				<h1>جست و جوی خانه ها</h1>
				<div className="home__searchSection">
					<div className="home__searchOptionButtons">
						<button onClick={() => setOption('buy')} style={{ color: option === 'buy' ? '#17CE30' : 'rgba(0, 0, 0, .5)', borderBottom: option === 'buy' ? '2px solid #17CE30' : '0' }}>خرید</button>
						<button onClick={() => setOption('rent')} style={{ color: option === 'rent' ? '#17CE30' : 'rgba(0, 0, 0, .5)', borderBottom: option === 'rent' ? '2px solid #17CE30' : '0' }}>رهن و اجاره</button>
					</div>
					<div className="home__searchForm">
						<form onSubmit={searchFormSubmitHandler}>
							<div className="home__searchInputSection">
								<input
									type="search"
									id="providence"
									name="providence"
									onChange={e => {
										setProvidences(findProvidence(e.target.value));
										setProvidence(e.target.value);
									}}
									value={providence}
									placeholder="استان"
									className="home__searchInput home__searchInput1"
									autoComplete="off"
								/>
								{providences.length > 0 &&
									<div className="home__searchAutocomplete">
										{providences.map(providence => (
											<div
												key={providence}
												onClick={() => { setProvidence(providence); setProvidences([]); }}
												className="home__autocompleteItem">
												{providence}
											</div>
										))}
									</div>
								}
							</div>
							<div className="home__searchInputSection">
								<input
									type="search"
									id="city"
									name="city"
									onChange={e => {
										setCities(findOneCity(providence, e.target.value));
										setCity(e.target.value);
									}}
									value={city}
									placeholder="شهر"
									className="home__searchInput home__searchInput2"
									autoComplete="off"
								/>
								{cities.length > 0 &&
									<div className="home__searchAutocomplete">
										{cities.map(city => (
											<div
												key={city}
												onClick={() => { setCity(city); setCities([]); }}
												className="home__autocompleteItem">
												{city}
											</div>
										))}
									</div>
								}
							</div>
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
