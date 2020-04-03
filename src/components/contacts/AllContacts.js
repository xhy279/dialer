import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ContactList from './ContactList';
import Header from '../header/Header';
import './AllContacts.css';

const AllContacts = ({users}) => {
  return (
    <div className="all-contacts">
      <Header config={{name:''}}/>
      <div className="all-contacts__content">
        {
          users  ? 
            <ContactList users={users}/>
            : 
            <div className="all-contacts__content-loader">
              <CircularProgress/>
            </div>
        }
      </div>
    </div>
  );
}

export default AllContacts;