import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css';
import Header from './header/Header';
import ContactList from './contacts/ContactList';
import Child from './contacts/Child';
import AllContacts from './contacts/AllContacts';


import { fetchUsers } from '../actions'; 

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <Router>
        <Switch>
          <Route path="/:id">
            <Child />
          </Route>
          <Route path="/" exact>
            <AllContacts users={users} />
          </Route>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  }
};

export default connect(mapStateToProps, {
  fetchUsers,
})(App);
