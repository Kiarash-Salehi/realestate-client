const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      const dispatch = action.payload.dispatch;
      const message = action.payload.message;
      const id = state.messages.length;
      setTimeout(() => {
        dispatch({ type: 'CLEAR_MESSAGE', payload: { id } });
      }, 4000);
      return {
        messages: [...state.messages, {message, id}]
      };
    case 'CLEAR_MESSAGE':
      let messages = [...state.messages];
      messages = messages.filter(message => message.id !== action.payload.id);
      return {
        messages
      };
    default:
      return state;
  }
};