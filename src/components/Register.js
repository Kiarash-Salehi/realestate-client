import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../actions/authAction';
import '../styles/Authentication.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [password2, setpassword2] = useState('');
  const dispatch = useDispatch();
  const registerHandler = e => {
    e.preventDefault();
    dispatch(register(username, email, password, password2));
  };
  return (
    <div className="auth__formContainer">
      <form onSubmit={registerHandler}><br />
        <label className="auth__label">نام کاربری:<br /> <input placeholder="نام کاربری" className="auth__input" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} /></label>
        <label className="auth__label">ایمیل:<br /> <input placeholder="ایمیل" className="auth__input" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} /></label>
        <label className="auth__label">رمزعبور:<br /> <input placeholder="رمز عبور" className="auth__input" type="password" name="password" value={password} onChange={e => setpassword(e.target.value)} /></label>
        <label className="auth__label">رمز عبور خود را تایید کنید:<br /> <input placeholder="رمز عبور" className="auth__input" type="password" name="confirm-password" value={password2} onChange={e => setpassword2(e.target.value)} /></label>
        <button type="submit" className="auth__btn ma">Register</button>
      </form>
    </div>
  );
}

export default Register;