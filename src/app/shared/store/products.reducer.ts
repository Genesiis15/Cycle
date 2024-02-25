import { createReducer, on } from "@ngrx/store"
import { addProduct, deleteProduct, loadProducts, filterProductsByTitle } from "./products.actions"
import { initialState } from "./products.state"
export const _productsReducer = createReducer(initialState,
    on(addProduct, (state, products) => {
        return [...state,products] 
    }),
    on(deleteProduct, (state, { productId }) => state.filter(product => product.id !== productId)),
    on(loadProducts, (state, { products }) => (products)),
)

export function productsReducer(state:any, action:any) {
    return _productsReducer(state,action)
}