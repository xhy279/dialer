import React from 'react';
import { connect } from 'react-redux';

import Header from '../header/Header';
import ProfileCard from '../profile/ProfileCard';
import LogCall from '../logCall/LogCall';

class ContactDetail extends React.Component {

  renderPage = (user, callOpen) => {
    return (
      <div>
        <Header config={{name: user.name}} />
        { !callOpen ? <ProfileCard user={user} /> : <LogCall /> }
      </div>
    )
  }

  render () {
    const { selectedUser, callOpen } = this.props;
    return (
      <div>
        { selectedUser ? this.renderPage(selectedUser, callOpen) : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedUser:  state.users.filter(user => user.id === Number(ownProps.id))[0],
    callOpen: state.callOpen,
  }
};

export default connect(mapStateToProps, null)(ContactDetail);