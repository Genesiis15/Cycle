import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { productsReducer } from "./products.reducer";
import { isDevMode } from "@angular/core";

export interface State {}

export const reducers: ActionReducerMap<State> = {
    products: productsReducer
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? []: []