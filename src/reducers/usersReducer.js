export default (users=[], action) => {
  switch(action.type) {
    case 'FETCH_USERS':
      return users.concat(action.payload);
    default:
      return users;
  }
}