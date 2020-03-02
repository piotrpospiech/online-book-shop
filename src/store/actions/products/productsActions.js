import shopServer from '../../api';

export const createProduct = (data) => async () => {
  try {
    const response = await shopServer.post('products', data, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return response.status;
  } catch (err) {
    console.error(err);
  }
};