import React from 'react';
import { logout } from '../actions/authAction';
import Header from '../components/Header';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Dashboard() {
  document.title = 'مشاورین املاک نارمک';
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user).user;
  const isAuthenticated = useSelector(state => state.user).isAuthenticated;
  if (!isAuthenticated) history.push('/authenticate');
  const logoutForm = e => {
    e.preventDefault();
    dispatch(logout());
    history.push('/');
  };
  return (
    <div>
      <Header />
      <div className="center">
        {user?.isAdmin ? <h1>خوش آمدید {user?.username} ادمین</h1> : <h1>خوش آمدید {user?.username}</h1>}
        <form onSubmit={logoutForm}>
          <button type="submit">Log Out</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
