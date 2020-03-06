import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Menu } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  logoutUser = () => {
    localStorage.removeItem('jwt');
    document.location.reload();
  };

  renderMenu = () => {

    const loginMenu = document.location.href.includes('admin-login');

    if (this.props.auth.isAuthenticated) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
              as={ NavLink }
              to='/admin-panel/dashboard'
              style={{ height: '100%' }}
            >
            Dashboard
          </Menu.Item>
          
          <Menu.Item
            as={ NavLink }
            to='/admin-panel/products'
            style={{ height: '100%' }}
          >
            Products
          </Menu.Item>

          <Menu.Item
            style={{ height: '100%', cursor: 'pointer' }}
            onClick={this.logoutUser}
          >
            Logout
          </Menu.Item>
        </Menu.Menu>
      );
    }
    else if (loginMenu) {
      return null;
    }
    else {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
              as={ NavLink }
              to='/shop'
              style={{ height: '100%' }}
            >
            Shop
          </Menu.Item>
          
          <Menu.Item
            as={ NavLink }
            to='/cart'
            style={{ height: '100%' }}
          >
            Cart
          </Menu.Item>
        </Menu.Menu>
      );
    }
  };

  render() {
    return (
      <Menu pointing secondary>
        <Container>
          <Menu.Item 
            as={ Link }
            to='/shop'
            name='shop'
            onClick={this.handleItemClick}
          >
            <img src='../../../public/logo.png' />
          </Menu.Item>

          {this.renderMenu()}
          
        </Container>
      </Menu>
    );
  }
};

const mapStateToProps = (state) => {
  return {
      auth: state.auth
  };
};

export default connect(mapStateToProps)(Navbar);