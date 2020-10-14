import axios from '../api/api';

export const login = (email, password) => (dispatch, getState) => {
  const messagesLength = getState().messages.messages.length;
  axios.post('/auth/login', { email, password })
    .then(res => {
      setMessage(res.data.message, res.status, messagesLength, dispatch);
      dispatch({
        type: 'LOGIN_USER',
        payload: res.data
      });
    })
    .catch(err => { setMessage(err.response.data.error, err.response.status, messagesLength, dispatch); });
};

export const loadUser = () => (dispatch, getState) => {
  const isAuthenticated = getState().user.isAuthenticated;
  if (!isAuthenticated) {
    const token = getState().user.token;
    if (token) {
      const messagesLength = getState().messages.messages.length;
      const config = {
        headers: {
          "Content-type": "application/json",
          "Authorization": token
        }
      };
      axios.get('/auth/user', config)
        .then(res => {
          console.log(res);
          setMessage('شما با موفقیت وارد حساب کاربری خود شدید.', res.status, messagesLength, dispatch);
          dispatch({
            type: 'LOAD_USER',
            payload: res.data
          });
        });
    }
  }
};

export const logout = () => (dispatch, getState) => {
  const messagesLength = getState().messages.messages.length;
  const msg = 'با موفقیت از حساب کاربری خود خارج شدید.';
  setMessage(msg, 203, messagesLength, dispatch);
  dispatch({ type: 'LOGOUT_USER' });
};

export const register = (username, email, password, password2) => (dispatch, getState) => {
  const messagesLength = getState().messages.messages.length;
  axios.post('/auth/register', { username, email, password, password2 })
    .then(res => {
      setMessage(res.data.message, res.status, messagesLength, dispatch);
      dispatch({
        type: 'REGISTER_USER',
        payload: res.data
      });
    })
    .catch(err => { setMessage(err.response.data.message || err.response.data.error, err.response.status, messagesLength, dispatch); });
};

const setMessage = (message, status, id, dispatch) => {
  console.log(id);
  if (!id) id = new Date().getTime();
  setTimeout(() => {
    dispatch({ type: 'CLEAR_MESSAGE', payload: { id } });
  }, 4000);
  dispatch({
    type: 'SET_MESSAGES',
    payload: {
      message: { message, status, id }
    }
  });
};