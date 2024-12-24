import { configureStore } from "@reduxjs/toolkit";
import { imagesSlice } from "../features/images/imagesSlice";



export const store = configureStore({
    reducer: {
        planets: imagesSlice.reducer
    }
})