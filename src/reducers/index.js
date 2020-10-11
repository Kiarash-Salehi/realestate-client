import authReducer from './authReducer';
import messagesReducer from './messagesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  user: authReducer,
  messages: messagesReducer
});