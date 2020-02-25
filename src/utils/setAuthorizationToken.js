import shopServer from '../store/api';

export default function setAuthorizationToken(jwt) {
  if (jwt) {
    shopServer.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
  }
  else {
    delete shopServer.defaults.headers.common['Authorization'];
  }
}