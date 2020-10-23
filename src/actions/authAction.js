import axios from '../api/api';
import { setMessage } from './messagesAction';

export const login = (email, password) => (dispatch, getState) => {
  dispatch({ type: 'SHOWLOADER' });
  const messagesLength = getState().messages.messages.length;
  axios.post('/auth/login', { email, password })
    .then(res => {
      setMessage(res.data.message, res.status, messagesLength, dispatch);
      dispatch({ type: 'HIDELOADER' });
      dispatch({
        type: 'LOGIN_USER',
        payload: res.data
      });
    })
    .catch(err => { dispatch({ type: 'HIDELOADER' }); setMessage(err.response.data.error, err.response.status, messagesLength, dispatch); });
};

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: 'SHOWLOADER' });
  const isAuthenticated = getState().user.isAuthenticated;
  if (!isAuthenticated) {
    const token = getState().user.token;
    if (token) {
      const config = {
        headers: {
          "Content-type": "application/json",
          "Authorization": token
        }
      };
      axios.get('/auth/user', config)
        .then(res => {
          dispatch({ type: 'HIDELOADER' });
          dispatch({
            type: 'LOAD_USER',
            payload: res.data
          });
        })
        .catch(() => dispatch({ type: 'HIDELOADER' }));
    } else dispatch({ type: 'HIDELOADER' });
  } else dispatch({ type: 'HIDELOADER' });
};

export const logout = () => (dispatch, getState) => {
  const messagesLength = getState().messages.messages.length;
  const msg = 'با موفقیت از حساب کاربری خود خارج شدید.';
  setMessage(msg, 203, messagesLength, dispatch);
  dispatch({ type: 'LOGOUT_USER' });
};

export const register = (username, email, password, password2) => (dispatch, getState) => {
  dispatch({ type: 'SHOWLOADER' });
  const messagesLength = getState().messages.messages.length;
  axios.post('/auth/register', { username, email, password, password2 })
    .then(res => {
      setMessage(res.data.message, res.status, messagesLength, dispatch);
      dispatch({ type: 'HIDELOADER' });
      dispatch({
        type: 'REGISTER_USER',
        payload: res.data
      });
    })
    .catch(err => { dispatch({ type: 'HIDELOADER' }); setMessage(err.response.data.message || err.response.data.error, err.response.status, messagesLength, dispatch); });
};