export default (state={
  users: [],
  selectedUser: {},
}, action) => {
  switch(action.type) {
    case 'FETCH_USERS':
      return Object.assign({}, state, {users: action.payload});
    case 'SELECT_USER':
      return Object.assign({}, state, {
        selectedUser: state.users.filter(user => user.id === action.payload)[0],
      });
    default:
      return state;
  }
}