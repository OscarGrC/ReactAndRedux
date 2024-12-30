import { configureStore } from "@reduxjs/toolkit";
import { ImagesSlice } from "../features/images/imagesSlice";
import { LikesSlice } from "../features/likes/likesSlice";
import { searchSlice } from '../features/search/searchSlice';

export const store = configureStore({
    reducer: {
        images: ImagesSlice.reducer,
        likes: LikesSlice.reducer,
        search: searchSlice.reducer
    }
})