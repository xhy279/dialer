import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { compose } from 'redux';

import Header from '../header/Header';



class ContactDetail extends React.Component {

  state = {
    user: null,
  };
 
  componentWillReceiveProps(nextProps) {
    if (this.props.users.length !== nextProps.users.length) {
      console.log(nextProps.users, this.props.id)
      this.setState({
        user: nextProps.users.filter(user => user.id === Number(this.props.id))[0],
      });
    }
  }

  renderPage = (user) => {
    return (
      <div>
        <Header config={{name: user.name}} />
      </div>
    )
  }
  

  render () {
    const { user } = this.state;

    return (
      
      <div>
        { user ? this.renderPage(user) : null}
      </div>
     
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
  }
};


export default compose(connect(mapStateToProps, null), withRouter)(ContactDetail);