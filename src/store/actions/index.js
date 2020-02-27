import shopServer from '../api';

import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_SLUG
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

export const fetchProductBySlug = (slug) => async dispatch => {
  try {
    const response = await shopServer.get(`products/${slug}`);
    dispatch({
      type: FETCH_PRODUCT_BY_SLUG,
      payload: response.data
    });
  } catch (err) {
    console.error(err);
  }
};