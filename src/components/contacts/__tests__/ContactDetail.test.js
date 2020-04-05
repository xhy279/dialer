import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import ContactDetail from '../ContactDetail';

const mockStore = configureStore([]);

describe('connected component test', () => {
  it('should render with given state from redux store', () => {
    let store = mockStore({
      users: [],
      callOpen: false,
      modalOpen: false,
    });
    let wrapper = shallow(
      <Provider store={store}>
        <ContactDetail />
      </Provider>
    )
    expect(wrapper).toMatchSnapshot();
  });
})

