import React, { useState } from 'react';
import { login } from '../actions/authAction';
import { useDispatch } from 'react-redux';
import './Authentication.css';

function Login({ show }) {
	document.title = 'مشاورین املاک نارمک';
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const loginForm = e => {
		e.preventDefault();
		dispatch(login(email, password));
	};
	return (
		<div className="auth__formContainer">
			<form onSubmit={loginForm}>
				<label class="auth__label"> ایمیل:<br /> <input className="auth__input" type="email" name="email" value={email} onChange={e => { setEmail(e.target.value) }} /></label>
				<label class="auth__label"> رمز عبور:<br /> <input className="auth__input" type="password" name="password" value={password} onChange={e => { setPassword(e.target.value) }} /></label>
				<button type="submit" className="auth__btn ma">Log In</button>
			</form>
		</div>
	);
}

export default Login;
