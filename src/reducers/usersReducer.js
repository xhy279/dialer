export default (state={
  users: [],
}, action) => {
  switch(action.type) {
    case 'FETCH_USERS':
      return Object.assign({}, state, {users: action.payload});
    // case 'SELECT_USER':
    //   return Object.assign({}, state, {
    //     selectedUser: state.users.filter(user => user.id === action.payload)[0],
    //   });
    case 'UPDATE_USER': 
      
      return Object.assign({}, state, {
        selectedUser: { ...state.selectedUser, log: action.payload }
      });
    default:
      return state;
  }
}