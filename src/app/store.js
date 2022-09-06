import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import filterReducer from '../features/filters/filterSlice';
import orderReducer from '../features/filters/orderSlice';
import cartReducer from '../features/cart/cartSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
    order: orderReducer,
    cart: cartReducer
  }
});
