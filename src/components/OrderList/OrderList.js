import React from 'react';
import { List, Message } from 'semantic-ui-react';

import OrderItem from '../OrderItem/OrderItem';

const renderOrderItems = (orders) => {
  return orders.map((order, index) => {
    return <OrderItem key={`order-${index}`} order={order}/>
  })
};

const OrderList = ({ orders }) => {
  return (
    <List celled>
      {orders.length > 0 ? (
        renderOrderItems(orders)
      ) : (
        <Message
          icon='inbox'
          header='Your list of orders is empty!'
        />
      )}
      
    </List>
  );
};

export default OrderList;