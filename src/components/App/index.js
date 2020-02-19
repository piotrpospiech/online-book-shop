import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../Navbar';
import Shop from '../Shop';
import Cart from '../Cart';
import Details from '../Details';
import Login from '../Login';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={Shop} />
      <Route path='/cart' component={Cart} />
      <Switch>
        <Route exact path='/details'>
          <Redirect to="/" />
        </Route>
        <Route path='/details/:slug' children={<Details />} />
      </Switch>

      <Route path='/admin-login' component={Login} />
    </Router>
  );
};

export default App;