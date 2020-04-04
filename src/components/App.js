import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import ContactDetail from './contacts/ContactDetail';
import AllContacts from './contacts/AllContacts';
import { fetchUsers } from '../actions'; 

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const { users } = this.props;

    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/:id" render={
              (props) => <ContactDetail 
              id={props.match.params.id} users={users} />} 
            />
            <Route path="/" exact>
              <AllContacts users={users} />
            </Route>
          </Switch>
        </Router>
      </div>
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
