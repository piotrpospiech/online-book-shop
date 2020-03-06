import { 
  LOGIN_USER
} from '../../types';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        isAuthenticated: (action.user != undefined),
        user: action.user,
        message: action.message
      }
    default:
      return state;
  }
};