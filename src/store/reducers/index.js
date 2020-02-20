import { combineReducers } from 'redux';

import productReducer from './product';
import productsReducer from './products';
import cartReducer from './cart';
import authReducer from './auth/authReducer';

export default combineReducers({
  product: productReducer,
  products: productsReducer,
  cart: cartReducer,
  auth: authReducer
});