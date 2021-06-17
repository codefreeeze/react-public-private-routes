import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['user'],
};

const appReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(persistConfig, appReducer);
