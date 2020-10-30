export const setMessage = (message, dispatch) => {
  dispatch({
    type: 'SET_MESSAGES',
    payload: { message, dispatch }
  });
};