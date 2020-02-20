import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../Navbar';
import Shop from '../Shop';
import Cart from '../Cart';
import Details from '../Details';
import Login from '../Login';
import Dashboard from '../Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/admin-panel/dashboard' component={Dashboard}/>
        <Route path='/admin-panel'>
          <Redirect to='/admin-panel/dashboard' />
        </Route>
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
};

export default App;