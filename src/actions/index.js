import api from '../apis/api';

export const fetchUsers = () => async (dispatch) => {
  const response = await api.get();
  dispatch({
    type: 'FETCH_USERS',
    payload: response.data,
  });
}
