import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import jwt from 'jsonwebtoken';

import { loginUser } from '../../store/actions/auth/authActions';

import Navbar from '../Navbar/Navbar';
import Shop from '../ShopPage/ShopPage';
import Cart from '../Cart/Cart';
import DetailsPage from '../DetailsPage/DetailsPage';
import Login from '../LoginPage/LoginPage';
import Dashboard from '../DashboardPage/DashboardPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import Checkout from '../Checkout/Checkout';
import CreateProductPage from '../CreateProductPage/CreateProductPage';
import EditProductPage from '../EditProductPage/EditProductPage';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    if (localStorage.getItem('jwt') && !this.props.auth.isAuthenticated) {
      const auth = jwt.decode(localStorage.getItem('jwt'));
      const loginData = {
        username: auth.user.username,
        password: auth.user.password
      };

      await this.props.loginUser(loginData);
    }

    this.setState({ isLoading: false });
  }

  render() {

    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <Dimmer active inverted>
          <Loader />
        </Dimmer>
      )
    }

    if (this.props.auth.isAuthenticated) {
      return (
        <Router>
          <Navbar />
            <Switch>
            <Route path='/admin-panel/edit/:slug' children={<EditProductPage />} />
            <Route path='/admin-panel/edit'>
              <Redirect to='/admin-panel/dashboard' />
            </Route>
            <Route path='/admin-panel/add' component={CreateProductPage}/>
            <Route path='/admin-panel/dashboard' component={Dashboard}/>
            <Route path='/admin-panel/products' component={ProductsPage}/>
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
            <Route path='/details/:slug' children={<DetailsPage />} />
            <Route path='/details'>
              <Redirect to='/shop' />
            </Route>
            <Route path='/cart' component={Cart} />
            <Route path='/shop' component={Shop} />
            <Route path='/checkout' component={Checkout} />
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