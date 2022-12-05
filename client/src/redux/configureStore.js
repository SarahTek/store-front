import { configureStore, combineReducers, applyMiddleware, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import cartReducer from "../store/cart";
import productsReducer from "../store/products";


export default function ConfigureStore(initialState) {
  const Rootreducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
  });

  const enhancements = [applyMiddleware[thunk]];
  const store = configureStore({ reducer: Rootreducer }, initialState, compose(...enhancements));

  return store;
}
