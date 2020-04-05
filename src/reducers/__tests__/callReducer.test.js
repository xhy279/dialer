import callReducer from '../callReducer';

describe('callReducer', () => {
  it('should return true state', () => {
    expect(callReducer(false, {type: 'OPEN_CALL'})).toEqual(true);
  })
  it('should return false state', () => {
    expect(callReducer(true, {type: 'CLOSE_CALL'})).toEqual(false);
  })
}); 