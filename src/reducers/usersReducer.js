export default (state=[], action) => {
  switch(action.type) {
    case 'FETCH_USERS':
      return state.concat(action.payload);
    default:
      return state;
  }
}