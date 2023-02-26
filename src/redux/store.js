import { createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';

import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const initialState = {};


export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);


export const persistor = persistStore(store);