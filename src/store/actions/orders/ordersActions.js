import shopServer from '../../api';

import {
  FETCH_ORDERS
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