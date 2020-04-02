import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ContactList from './ContactList';
import Header from '../header/Header';

const AllContacts = ({users}) => {
  return (
    <div className="app">
        <Header />
        <div className="app__content">
          { 
            users.length > 0 ? 
              <ContactList users={users} />
                : 
              <div className="app__content-loader">
                <CircularProgress /> 
              </div>
          }
          
        </div>
      </div>
  );
}

export default AllContacts;