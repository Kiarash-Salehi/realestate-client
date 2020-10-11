import React, { useState } from 'react';
import Header from '../components/Header';
import Login from '../components/Login';
import Register from '../components/Register';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../components/Authentication.css';

function Authentication() {
  document.title = 'مشاورین املاک نارمک';
  const isAuthenticated = useSelector(state => state.user).isAuthenticated;
  const history = useHistory();
  if (isAuthenticated) history.push('/dashboard');
  const [login, setLogin] = useState(true);
  return (
    <div className="auth">
      <Header />
      <div className="auth__btns">
        <button className="auth__btn" onClick={() => setLogin(true)}>Log In</button>
        <button className="auth__btn" onClick={() => setLogin(false)}>Register</button>
        <span style={{
          transform: !login ? 'translateX(0)' : 'translateX(78.5781px)',
          borderRadius: login ? '0 50px 50px 0' : '50px 0 0 50px',
          width: login ? '64.125px' : '78.5781px'
        }}></span>
      </div>
      <div className="auth__contaier">
        <div className="auth__forms" style={{ transform: login ? 'translateX(-150px)' : 'translateX(150px)' }}>
          < Login show={login} />
          <Register show={login} />
        </div>
      </div>
    </div>
  );
}

export default Authentication;
