import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/authAction';
import Home from './routes/Home';
import Messages from './components/Messages';
import Authentication from './routes/Authentication';
import Dashboard from './routes/Dashboard';
import AboutUs from './routes/AboutUs';
import Listings from './routes/Listings';
import ContactUs from './routes/ContactUs';
import NotFound from './routes/NotFound';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadUser());
		// eslint-disable-next-line
	}, []);
	return (
		<>
			<Messages />
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
