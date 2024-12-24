import { configureStore } from "@reduxjs/toolkit";
import { ImagesSlice } from "../features/images/imagesSlice";



export const store = configureStore({
    reducer: {
        images: ImagesSlice.reducer
    }
})