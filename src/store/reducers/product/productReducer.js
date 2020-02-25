import { 
  FETCH_PRODUCT_BY_SLUG
} from '../../types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_BY_SLUG:
      return action.payload;
    default:
      return state;
  }
};