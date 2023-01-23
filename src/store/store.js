import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { inventarySlice } from "./enerbit/inventarySlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        inventary: inventarySlice.reducer,
    } 
})