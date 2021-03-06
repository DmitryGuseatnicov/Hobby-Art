import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { cartModel } from './cart';
import { productModel } from './product';

import { userModel } from './user';

const rootReducer = combineReducers({
  userReducer: userModel.userReducer,
  productReducer: productModel.productReducer,
  cartReducer: cartModel.cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type AsyncDispatch = ThunkDispatch<RootState, void, AnyAction>;
export { store };
export type { RootState, AppDispatch, AsyncDispatch };
