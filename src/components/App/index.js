import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../Navbar';
import Shop from '../Shop';
import Cart from '../Cart';
import Details from '../Details';

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Route exact path='/' component={Shop} />
      <Route path='/cart' component={Cart} />
      <Switch>
        <Route exact path='/details'>
          <Redirect to="/" />
        </Route>
        <Route path='/details/:slug' children={<Details />} />
      </Switch>
    </Router>
  );
};

export default App;