import shopServer from '../../api';

import {
  DELETE_PRODUCT
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