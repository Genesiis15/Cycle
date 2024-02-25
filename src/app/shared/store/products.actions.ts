import { createAction, props } from "@ngrx/store";
import { ProductsModel } from './user.model'


export const loadProducts = createAction('loadProducts',  props<{products: ProductsModel[]}>())
export const addProduct = createAction('addProduct',  props<ProductsModel>())
export const deleteProduct = createAction('deleteProduct', props<{ productId: string }>())
export const filterProductsByTitle = createAction(
  'filterProductsByTitle',
  props<{ title: string }>()
);