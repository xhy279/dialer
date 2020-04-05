import modalReducer from '../modalReducer';

describe('modalReducer', () => {
  it('should return opposite state', () => {
    expect(modalReducer(false, {type: 'TOGGLE_MODAL'})).toEqual(true);
  })
}); 