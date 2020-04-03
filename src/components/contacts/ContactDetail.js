import React from 'react';
import { connect } from 'react-redux';

import Header from '../header/Header';
import { selectUser } from '../../actions';
import ProfileCard from '../profile/ProfileCard';

class ContactDetail extends React.Component {

  componentWillReceiveProps(nextProps) {
    nextProps.selectUser(nextProps.selectedUser.id);
  }

  renderPage = (user) => {
    return (
      <div>
        <Header config={{name: user.name}} />
        <ProfileCard user={user} />
      </div>
    )
  }
  

  render () {
    const { selectedUser } = this.props;
    return (
      
      <div>
        { selectedUser ? this.renderPage(selectedUser) : null}
      </div>
     
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedUser: state.usersInfo.users.filter(user => user.id === Number(ownProps.id))[0],
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectUser: (id) => dispatch(selectUser(id)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);