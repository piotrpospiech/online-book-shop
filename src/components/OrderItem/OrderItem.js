import React from 'react';
import { List, Button, Modal, Icon } from 'semantic-ui-react';
import moment from 'moment';

const renderProducts = (products) => {
  return products.map((product, index) => {
    return (
      <List.Item>
        <List.Header>{product.title}</List.Header>
        <List.Content>${product.price}</List.Content>
      </List.Item>
    );
  });
};

const OrderItem = ({ order }) => {

  const { date, total, products, billingDetails } = order;
  const { firstName, lastName, country, address, apartment, postcode, city, phone, email } = billingDetails;

  const parsedDate = moment(date).format('HH:mm · DD-MM-YYYY');

  const numOfProducts = products.length;

  return (
    <List.Item>
      <List.Content floated='left'>
        <List.Header>{parsedDate}</List.Header>
        {numOfProducts} products · ${total}
      </List.Content>
      <List.Content floated='right'>
        <Modal trigger={<Button>Show</Button>}>
          <Modal.Header>Order details</Modal.Header>
          <Modal.Content image scrolling>
            <Modal.Description style={{ height: 'fit-content' }}>
              <h3>Products:</h3>
              <List celled>
                {renderProducts(products)}
              </List>
              <h4 style={{ marginTop: '10px' }}>Total: ${total}</h4>

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
          <Modal.Actions>
            <Button color='green'>
              Mark as completed <Icon name='chevron right' />
            </Button>
          </Modal.Actions>
        </Modal>
      </List.Content>
    </List.Item>
  );
};

export default OrderItem;