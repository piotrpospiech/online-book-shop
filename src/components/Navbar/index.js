import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  renderMenu = () => {

    const adminMenu = document.location.href.includes('admin-panel');
    const loginMenu = document.location.href.includes('admin-login');

    console.log(loginMenu);

    if (adminMenu) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
              as={ NavLink }
              to='/admin-panel/dashboard'
              name='dashboard'
              style={{ height: '100%' }}
              onClick={this.handleItemClick}
            >
            Dashboard
          </Menu.Item>
          
          <Menu.Item
            as={ NavLink }
            to='/admin-panel/products'
            name='products'
            style={{ height: '100%' }}
            onClick={this.handleItemClick}
          >
            Products
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
              name='shop'
              style={{ height: '100%' }}
            >
            Shop
          </Menu.Item>
          
          <Menu.Item
            as={ NavLink }
            to='/cart'
            name='cart'
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
            as={ NavLink }
            to='/'
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

export default Navbar;