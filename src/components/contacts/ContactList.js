import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import ContactCard from './ContactCard';
import { selectUser } from '../../actions';

class ContactList extends React.Component {

  selectUser = (id) => {
    this.props.selectUser(id);
  }
  renderList = () => {
    return this.props.users.map((user, index) => {
      return ( 
        <Link to={`${user.id}`} key={index} onClick={this.selectUser.bind(this, user.id)}>
          <ContactCard  user={user} />
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


const mapDispatchToProps = dispatch => {
  return {
    selectUser: (id) => dispatch(selectUser(id)),
  }
}

export default connect(null, mapDispatchToProps)(ContactList);