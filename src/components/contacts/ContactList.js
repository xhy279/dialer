import React from 'react';
import { Link } from 'react-router-dom'

import ContactCard from './ContactCard';

class ContactList extends React.Component {
  renderList = () => {
    return this.props.users.map((user, index) => {
      return ( 
        <Link to={`${user.id}`}>
          <ContactCard key={index} user={user} />
        </Link>
      ) 
    });
  }
  render() {
    return (
        <div>
          {this.renderList()}
        </div>
    )
  }

}

export default ContactList;