import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const middlewares = [thunk];

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)

export const store = createStoreWithMiddleware(rootReducer)