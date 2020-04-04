import React from 'react';
import { connect } from 'react-redux';
import Header from '../header/Header';
import ProfileCard from '../profile/ProfileCard';
import LogCall from '../logCall/LogCall';
import Modal from '../modal/Modal';
import { toggleModal, updateUser } from '../../actions';

class ContactDetail extends React.Component {

  modalHandler = (status) => {
    if(status === 'close') {
      this.props.toggleModal();
    } else if (status === 'hired') {
      this.props.updateUser( {
        id: Number(this.props.id),
        field: 'status',
        value: 'hired'
      });
      this.props.toggleModal();
    }
  }

  renderPage = (user, callOpen, modalOpen) => {
    return (
      <div>
        <Modal show={modalOpen} handler={this.modalHandler}></Modal>
        <Header config={{name: user.name}} />
        { !callOpen ? <ProfileCard user={user} /> : <LogCall /> }
      </div>
    )
  }

  render () {
    const { selectedUser, callOpen, modalOpen } = this.props;
    return (
      <div>
        { selectedUser ? this.renderPage(selectedUser, callOpen, modalOpen) : null}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedUser:  state.users.filter(user => user.id === Number(ownProps.id))[0],
    callOpen: state.callOpen,
    modalOpen: state.modalOpen,
  }
};

export default connect(mapStateToProps, {toggleModal, updateUser})(ContactDetail);