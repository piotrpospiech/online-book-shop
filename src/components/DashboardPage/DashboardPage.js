import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { fetchOrders } from '../../store/actions/orders/ordersActions';

import PageTitle from '../PageTitle/PageTitle';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'orders'
    };
  }

  handleItemClick = (_, { name }) => {
    this.setState({ activeItem: name });

    if (name === 'orders') {
      this.props.fetchOrders(false);
    } 
    else {
      this.props.fetchOrders(true);
    }
  }

  componentDidMount() {
    this.props.fetchOrders(false);
  }
 
  render() {

    const { activeItem } = this.state;

    return (
      <main>
        <PageTitle title='dashboard' leftColor='#343144' rightColor='#343144' />
        <Container style={{ marginTop: '20px' }}>
          <Menu>
            <Menu.Item
              name='orders'
              active={activeItem === 'orders'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='completed'
              active={activeItem === 'completed'}
              onClick={this.handleItemClick}
            />
          </Menu>
  
          {/* <OrdersList /> */}
        </Container>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      orders: state.orders
  };
};

export default connect(mapStateToProps, {
  fetchOrders
})(Dashboard);