import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';

export const initialState: any[] = [];
const _cartReducer = createReducer(initialState,
  on(CartActions.addToCart, (state, { product }) => [...state, product]),
  // Additional cart actions can be added here (e.g., removeFromCart)
);
export function cartReducer(state:any, action:any) {
  return _cartReducer(state, action);
}
