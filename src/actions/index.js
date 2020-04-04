import api from '../apis/api';

export const fetchUsers = () => async (dispatch) => {
  const response = await api.get();
  dispatch({
    type: 'FETCH_USERS',
    payload: response.data,
  });
};

export const toggleModal = () => {
  return {
    type: 'TOGGLE_MODAL'
  }
}

export const updateUser = (update) => {
  return {
    type: 'UPDATE_USER',
    payload: update
  }
}