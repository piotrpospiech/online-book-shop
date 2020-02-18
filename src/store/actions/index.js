import shopServer from '../api';

import {
  FETCH_PRODUCTS,
} from '../types';

export const fetchProducts = () => async dispatch => {
  try {
    const response = await shopServer.get('products');
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.data
    });
  } catch (err) {
    console.error(err);
  }
};