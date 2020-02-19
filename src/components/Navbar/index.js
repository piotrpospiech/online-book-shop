import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {};
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }

  renderMenu = () => {

    const adminMenu = document.location.href.includes('admin-panel');
    const loginMenu = document.location.href.includes('admin-login');

    console.log(loginMenu);

    if (adminMenu) {
      const activeItem = this.state.activeItem || 'dashboard';
      return (
        <Menu.Menu position='right'>
          <Menu.Item
              as={ Link }
              to='/admin-panel/dashboard'
              name='dashboard'
              style={{ height: '100%' }}
              active={activeItem === 'dashboard'}
              onClick={this.handleItemClick}
            >
            Dashboard
          </Menu.Item>
          
          <Menu.Item
            as={ Link }
            to='/admin-panel/products'
            name='products'
            style={{ height: '100%' }}
            active={activeItem === 'products'}
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
      const activeItem = this.state.activeItem || 'shop';
      return (
        <Menu.Menu position='right'>
          <Menu.Item
              as={ Link }
              to='/'
              name='shop'
              style={{ height: '100%' }}
              active={activeItem === 'shop'}
              onClick={this.handleItemClick}
            >
            Shop
          </Menu.Item>
          
          <Menu.Item
            as={ Link }
            to='/cart'
            name='cart'
            style={{ height: '100%' }}
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}
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