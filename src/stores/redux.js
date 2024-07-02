import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
import cartSlices from "./slices/cart.slices";

const store = configureStore({
    reducer: {
        products,
        cartSlices, 
    }
})

export default store;