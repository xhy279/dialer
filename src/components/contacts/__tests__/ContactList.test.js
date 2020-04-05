import { shallow } from 'enzyme';
import React from 'react';
import ContactList from '../ContactList';

it( 'expect to match snapshot', () => {
  const mockUsers = [
    {
      id: 1,
      name: 'test',
      phone: 11111,
      status: 'open',
      untouched: true,
    }
  ];
  expect(shallow(<ContactList users={mockUsers} />)).toMatchSnapshot();
})