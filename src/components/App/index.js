import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';

import { loginUser } from '../../store/actions/auth/authActions';

import Navbar from '../Navbar';
import Shop from '../Shop';
import Cart from '../Cart';
import Details from '../Details';
import Login from '../Login';
import Dashboard from '../Dashboard/Dashboard';

class App extends Component {

  constructor(props) {
    super(props);

    if (localStorage.getItem('jwt') && !this.props.auth.isAuthenticated) {
      const auth = jwt.decode(localStorage.getItem('jwt'));
      const loginData = {
        username: auth.user.username,
        password: auth.user.password
      };

      this.props.loginUser(loginData);
    }
  }

  render() {
    if (this.props.auth.isAuthenticated) {
      return (
        <Router>
          <Navbar />
          <Switch>
          <Route path='/admin-panel/dashboard' component={Dashboard}/>
            <Route path='*'>
              <Redirect to='/admin-panel/dashboard' />
            </Route>
          </Switch>
        </Router>
      );
    }
    else {
      return (
        <Router>
          <Navbar />
          <Switch>
            <Route path='/admin-login' component={Login} />
            <Route path='/details/:slug' children={<Details />} />
            <Route path='/details'>
              <Redirect to='/shop' />
            </Route>
            <Route path='/cart' component={Cart} />
            <Route path='/shop' component={Shop} />
            <Route path='/'>
              <Redirect to='/shop' />
            </Route>
          </Switch>
        </Router>
      );
    }
  };
}

const mapStateToProps = (state) => {
  return {
      auth: state.auth
  };
};

export default connect(mapStateToProps, {
  loginUser
})(App);