import shopServer from '../../api';

import {
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_BY_SLUG
} from '../../types';

export const createProduct = (data) => async () => {
  try {
    const response = await shopServer.post('products', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const updateProduct = (data) => async () => {
  try {
    const response = await shopServer.put('products', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.status;
  } catch (err) {
    console.error(err);
  }
};

export const deleteProduct = (slug) => async dispatch => {
  try {
    await shopServer.delete(`products/${slug}`);
    dispatch({
      type: DELETE_PRODUCT
    });
  } catch (err) {
    console.error(err);
  }
};

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