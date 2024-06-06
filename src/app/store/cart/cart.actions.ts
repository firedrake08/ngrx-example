import { createAction, props } from '@ngrx/store';

export interface Product { 
    id: number; 
    name: string; 
    price: number; 
}
export const addToCart = createAction(
  '[Products Cart Component] Add to Cart',
  props<{ product: Product }>()
);
