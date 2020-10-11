const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return {
        messages: [...state.messages, action.payload.message]
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