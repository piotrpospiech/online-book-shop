import { combineReducers } from 'redux';

import productReducer from './product/productReducer';
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';
import authReducer from './auth/authReducer';

export default combineReducers({
  product: productReducer,
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer
});