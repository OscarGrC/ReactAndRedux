import { configureStore } from "@reduxjs/toolkit";
import { ImagesSlice } from "../features/images/imagesSlice";
import { LikesSlice } from "../features/likes/likesSlice";


export const store = configureStore({
    reducer: {
        images: ImagesSlice.reducer,
        likes: LikesSlice.reducer,
    }
})