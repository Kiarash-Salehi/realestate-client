import axios from '../api/api';
import { setMessage } from './messagesAction';

export const login = (email, password) => (dispatch, getState) => {
  dispatch({ type: 'SHOWLOADER' });
  axios.post('/auth/login', { email, password })
    .then(res => {
      setMessage(res?.data?.message || res?.message, dispatch);
      dispatch({
        type: 'LOGIN_USER',
        payload: res.data
      });
      dispatch({ type: 'HIDELOADER' });
    })
    .catch(err => {
      dispatch({ type: 'HIDELOADER' });
      setMessage(err?.response?.data?.error || err?.message, dispatch);
    });
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
          dispatch({
            type: 'LOAD_USER',
            payload: res.data
          });
          dispatch({ type: 'HIDELOADER' });
        })
        .catch(() => dispatch({ type: 'HIDELOADER' }));
    } else dispatch({ type: 'HIDELOADER' });
  } else dispatch({ type: 'HIDELOADER' });
};

export const logout = () => (dispatch) => {
  const msg = 'با موفقیت از حساب کاربری خود خارج شدید.';
  setMessage(msg, dispatch);
  dispatch({ type: 'LOGOUT_USER' });
};

export const register = (username, email, password, password2) => (dispatch) => {
  dispatch({ type: 'SHOWLOADER' });
  axios.post('/auth/register', { username, email, password, password2 })
    .then(res => {
      setMessage(res?.data?.message || res?.message, dispatch);
      dispatch({
        type: 'REGISTER_USER',
        payload: res.data
      });
      dispatch({ type: 'HIDELOADER' });
    })
    .catch(err => {
      dispatch({ type: 'HIDELOADER' });
      setMessage(err?.response?.data?.message || err?.response?.data?.error || err?.message, dispatch);
    });
};