import React, { useEffect } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './actions/authAction';
import Home from './routes/Home';
import Messages from './components/Messages';
import Authentication from './routes/Authentication';
import Dashboard from './routes/Dashboard';
import AboutUs from './routes/AboutUs';
import Listings from './routes/Listings';
import ContactUs from './routes/ContactUs';
import NotFound from './routes/NotFound';
import PreLoader from './components/PreLoader';

const App = () => {
	const dispatch = useDispatch();
	const showLoader = useSelector(state => state.showLoader).showLoader;
	useEffect(() => {
		dispatch(loadUser());
		// window.addEventListener('load', () => dispatch({ type: 'HIDELOADER' }));
		// return () => {
		// 	window.removeEventListener('load');
		// };
		// eslint-disable-next-line
	}, []);
	return (
		<>
			<Messages />
			{showLoader ? <PreLoader style={{ opacity: 1 }} /> : <PreLoader style={{ opacity: 0, userSelect: 'none', pointerEvents: 'none' }} />}
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/authenticate" component={Authentication} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/aboutus" component={AboutUs} />
					<Route exact path="/listings" component={Listings} />
					<Route exact path="/contactus" component={ContactUs} />
					<Route path="/*" component={NotFound} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
