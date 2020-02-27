import { combineReducers } from 'redux';

import productReducer from './product/productReducer';
import productsReducer from './products/productsReducer';
import ordersReducer from './orders/ordersReducer';
import cartReducer from './cart/cartReducer';
import authReducer from './auth/authReducer';

export default combineReducers({
  product: productReducer,
  products: productsReducer,
  orders: ordersReducer,
  cart: cartReducer,
  auth: authReducer
});