import { 
  FETCH_PRODUCT_BY_SLUG,
  DELETE_PRODUCT
} from '../../types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_BY_SLUG:
      return action.payload;
    case DELETE_PRODUCT:
      return {};
    default:
      return state;
  }
};