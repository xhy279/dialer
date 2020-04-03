export default (state=false, action) => {
  switch(action.type) {
    case 'OPEN_CALL':
      return true;
    case 'CLOSE_CALL':
      return false;
    default:
      return state;
  }
}