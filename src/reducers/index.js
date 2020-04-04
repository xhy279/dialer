import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import callReducer from './callReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  users: usersReducer,
  callOpen: callReducer,
  modalOpen: modalReducer,
});