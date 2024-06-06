import { counterReducer } from './counter/counter.reducer';
import { cartReducer } from './cart/cart.reducer';
export interface AppState {
  count: number;
  cart: any[];
}
export const appReducer = {
  count: counterReducer,
  cart: cartReducer
};
