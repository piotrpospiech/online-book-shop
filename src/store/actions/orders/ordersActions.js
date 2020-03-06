import shopServer from '../../api';

import {
  FETCH_ORDERS,
  UPDATE_ORDER
} from '../../types';

export const fetchOrders = (completed) => async dispatch => {
  try {
    const response = await shopServer.get(`orders?completed=${completed}`);
    dispatch({
      type: FETCH_ORDERS,
      payload: response.data
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateOrder = (id) => async dispatch => {
  try {
    const response = await shopServer.put(`orders/${id}`);
    dispatch({
      type: UPDATE_ORDER,
      payload: response.data
    });
  } catch (err) {
    console.error(err);
  }
};

export const sendOrder = (data) => async () => {
  try {
    const response = await shopServer.post('orders', data);
    return response.status;
  } catch (err) {
    console.error(err);
  }
};