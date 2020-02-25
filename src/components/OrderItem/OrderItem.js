import React from 'react';
import { List, Button } from 'semantic-ui-react';
import moment from 'moment';

const OrderItem = ({ order }) => {

  const { date, total, products } = order;

  const parsedDate = moment(date).format('HH:mm · DD-MM-YYYY')

  const numOfProducts = products.length;

  return (
    <List.Item>
      <List.Content floated='left'>
        <List.Header>{parsedDate}</List.Header>
        {numOfProducts} products · ${total}
      </List.Content>
      <List.Content floated='right'>
        <Button>Show</Button>
      </List.Content>
    </List.Item>
  );
};

export default OrderItem;