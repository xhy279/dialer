import { shallow } from 'enzyme';
import React from 'react';
import AllContacts from '../AllContacts';

it( 'expect to match snapshot', () => {
  expect(shallow(<AllContacts />)).toMatchSnapshot();
})