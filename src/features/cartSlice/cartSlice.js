import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cartItems: [],
    // buyItems: []
}

const cartSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        prodData: (state, action) => {
            if (state.products.length === 0) {
                state.products.push(...action.payload);
            }
        },
        addItem: (state, action) => {
            const newItem = action.payload;

            const isPresent = state.cartItems.find(item => item.id === newItem.id);

            if (!isPresent) {
                state.cartItems.push(newItem);
            }
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter (cartItem => cartItem.id !== action.payload);
        },
        // buyData: (state, action) => {
        //     const newItem = action.payload;
        //     const isPresent = state.buyItems.find(item => item.id === newItem.id);
        //     if (!isPresent) {
        //         state.buyItems = (action.payload);
        //     }
            
        // }
    }
});

export const { prodData, addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

