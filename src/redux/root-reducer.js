import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productsReducer from './products/products-reducer';
import categoriasReducer from './categories/cat-reducers';
import cartReducer from './cart/cart-reducer';
import userReducer from './user/user-reducers';
import burguerReducer from './burguer/burg-reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart', 'user'],
};

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriasReducer,
  cart: cartReducer,
  user: userReducer,
  burguer: burguerReducer,
});

export default persistReducer(persistConfig, rootReducer);