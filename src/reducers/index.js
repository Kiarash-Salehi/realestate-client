import authReducer from './authReducer';
import messagesReducer from './messagesReducer';
import showLoaderReducer from './showLoaderReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  user: authReducer,
  messages: messagesReducer,
  showLoader: showLoaderReducer
});