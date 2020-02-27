import React, { Component, Fragment } from 'react';
import { Table, Container, Message, Button } from 'semantic-ui-react';

import PageTitle from '../PageTitle/PageTitle';

class Cart extends Component {

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

  render() {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let total = 0;
    let numOfProducts = 0;
    cart.forEach(product => {
      total += product.price;
      numOfProducts += product.quantity;
    });
    
    return (
      <main>
        <PageTitle title='cart' leftColor='#343144' rightColor='#343144' />
        <Container style={{ marginTop: '20px' }}>
          {cart.length > 0 ? (
            <Fragment>
              <Table celled unstackable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Product</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {this.renderProducts(cart)}
                </Table.Body>

                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell><b>${total}</b></Table.HeaderCell>
                    <Table.HeaderCell><b>{numOfProducts}</b></Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>

              <Button floated='right' color='teal' icon='shopping cart' content='Checkout' />
              <Button floated='right' basic color='red' icon='trash' content='Reset cart' />
            </Fragment>
          ) : (
            <Message
              icon='shopping cart'
              header='Your cart is empty!'
            />
          )}
        </Container>
      </main>
    );
  }
};

export default Cart;