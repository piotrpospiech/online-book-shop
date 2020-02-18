import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import Shop from '../Shop';
import Cart from '../Cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={Shop} />
      <Route path='/cart' component={Cart} />
    </Router>
  );
};

export default App;