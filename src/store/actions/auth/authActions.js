import shopServer from '../../api';

import { LOGIN_USER } from '../../types';

export const loginUser = (data) => async dispatch => {
  try {
    const response = await shopServer.post('auth', data);
    dispatch({
      type: LOGIN_USER,
      payload: response.data
    });
  } catch (err) {
    console.error(err);
  }
};