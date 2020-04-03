import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import callReducer from './callReducer';

export default combineReducers({
  usersInfo: usersReducer,
  callOpen: callReducer,
});