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

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary>
        <Container>
          <Menu.Item 
            as={ Link }
            to='/'
          >
            <img src='../../../public/logo.png' />
          </Menu.Item>
  
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
        </Container>
      </Menu>
    );
  }
};

export default Navbar;