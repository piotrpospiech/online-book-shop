import jwt from 'jsonwebtoken';

import shopServer from '../../api';
import setAuthorizationToken from '../../../utils/setAuthorizationToken';

import { LOGIN_USER } from '../../types';

export const loginUser = (data) => async dispatch => {
  try {
    const response = await shopServer.post('auth', data);

    const token = response.data.token;
    if (token) {
      localStorage.setItem('jwt', token);
      setAuthorizationToken(token);
      dispatch({
        type: LOGIN_USER,
        user: jwt.decode(token)
      });
    }
    else {
      dispatch({
        type: LOGIN_USER,
        message: response.data.message
      });
    }
  } catch (err) {
    console.error(err);
  }
};