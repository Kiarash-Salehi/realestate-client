export const setMessage = (message, status, id, dispatch) => {
  id = Math.floor(Math.random() * 213264) + id;
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