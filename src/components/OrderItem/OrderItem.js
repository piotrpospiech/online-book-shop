import React, { Component } from 'react';
import { List, Button, Modal, Icon, Table } from 'semantic-ui-react';
import moment from 'moment';
import { connect } from 'react-redux';

import { updateOrder } from '../../store/actions/orders/ordersActions';

class OrderItem extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      modalOpen: false
    };
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  renderProducts = (products) => {
    return products.map((product, index) => {
      return (
        <Table.Row key={`product-${index}`}>
          <Table.Cell>{product.title}</Table.Cell>
          <Table.Cell>${product.price}</Table.Cell>
          <Table.Cell>{product.quantity}</Table.Cell>
        </Table.Row>
      );
    });
  };

  handleCompleteButton = (id) => () => {
    this.props.updateOrder(id);
    this.handleClose();
  };

  render() {
    const { _id, date, total, products, billingDetails, completed } = this.props.order;
    const { firstName, lastName, country, address, apartment, postcode, city, phone, email } = billingDetails;

    const parsedDate = moment(date).format('HH:mm · DD-MM-YYYY');

    let numOfProducts = 0;
    products.forEach(product => numOfProducts += product.quantity)

    return (
      <List.Item>
        <List.Content floated='left'>
          <List.Header>{parsedDate}</List.Header>
          {numOfProducts} products · ${total}
        </List.Content>
        <List.Content floated='right'>
          <Modal 
          trigger={<Button onClick={this.handleOpen}>Show</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          >
            <Modal.Header>Order details</Modal.Header>
            <Modal.Content image scrolling>
              <Modal.Description style={{ height: 'fit-content' }}>
                <Table celled unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Product</Table.HeaderCell>
                      <Table.HeaderCell>Price</Table.HeaderCell>
                      <Table.HeaderCell>Quantity</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {this.renderProducts(products)}
                  </Table.Body>

                  <Table.Footer>
                    <Table.Row>
                      <Table.HeaderCell />
                      <Table.HeaderCell><b>${total}</b></Table.HeaderCell>
                      <Table.HeaderCell><b>{numOfProducts}</b></Table.HeaderCell>
                    </Table.Row>
                  </Table.Footer>
                </Table>

                <h3>Billing details:</h3>
                <span>{firstName} {lastName}</span><br />
                {apartment ? (
                  <span>{address}/{apartment}</span>
                ) : (
                  <span>{address}</span>
                )}<br />
                <span>{postcode}, {city}, {country}</span><br />
                <span>{phone}</span><br />
                <span>{email}</span><br />
              </Modal.Description>
            </Modal.Content>
            {!completed ? (
              <Modal.Actions>
                <Button color='green' onClick={this.handleCompleteButton(_id)}>
                  Mark as completed <Icon name='chevron right' />
                </Button>
              </Modal.Actions>
            ) : null}
          </Modal>
        </List.Content>
      </List.Item>
    );
  }
};

export default connect(null, {
  updateOrder
})(OrderItem);