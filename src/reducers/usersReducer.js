export default (state=[], action) => {
  switch(action.type) {
    case 'FETCH_USERS':
      return Object.assign([], state, action.payload);
    case 'UPDATE_USER':
      return state.map(user => {
        if(user.id !== Number(action.payload.id)) {
          return user;
        } else {
          return Object.assign({}, user, {log: action.payload.value});
        }
      });
    default:
      return state;
  }
}