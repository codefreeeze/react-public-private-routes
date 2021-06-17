import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import appReducer from './appReducer';

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };
