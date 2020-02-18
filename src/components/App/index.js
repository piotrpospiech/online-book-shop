import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' />
      <Route path='/cart' />
    </Router>
  );
};

export default App;