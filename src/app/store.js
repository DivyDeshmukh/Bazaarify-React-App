import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice/cartSlice';

const store = configureStore ({
    reducer: cartReducer
});

export default store;
