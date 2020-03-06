import { 
  FETCH_ORDERS, 
  UPDATE_ORDER
} from '../../types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return action.payload;
    case UPDATE_ORDER:
      return state.filter(order => order._id != action.payload._id);
    default:
      return state;
  }
};