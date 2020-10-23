const initialState = {
  token: localStorage.getItem('Authorization_token'),
  isAuthenticated: false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      localStorage.setItem('Authorization_token', action.payload.token);
      return {
        token: action.payload.token,
        isAuthenticated: true,
        user: action.payload.user
      };
    case 'LOAD_USER':
      return {
        token: state.token,
        isAuthenticated: true,
        user: action.payload.user
      };
    case 'LOGOUT_USER':
      localStorage.removeItem('Authorization_token');
      return {
        token: null,
        isAuthenticated: false,
        user: null
      };
    case 'REGISTER_USER':
      localStorage.setItem('Authorization_token', action.payload.token);
      return {
        token: action.payload.token,
        isAuthenticated: true,
        user: action.payload.user
      };
    default:
      return state;
  }
};