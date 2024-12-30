import { createSlice } from "@reduxjs/toolkit";
import { GetImagesListThunk } from "./imagesThunks";
import { fetchSearchResults } from "../search/searchThunks";



export const ImagesSlice = createSlice({
    name: "images",
    initialState: {
        imagesData: [],
        status: "idle",
        error: false,
        page: 1,
    },
    reducers: {

        updateImages(state, action) {
            state.imagesData = action.payload;
        },
        incrementPage(state) {
            state.page += 1;
        },
        decrementPage(state) {
            if (state.page > 1) {
                state.page -= 1;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetImagesListThunk.pending, (state) => {
                state.status = "pending";
            })
            .addCase(GetImagesListThunk.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.imagesData = action.payload;
            })
            .addCase(GetImagesListThunk.rejected, (state) => {
                state.error = true;
                state.status = "rejected";
            })
            .addCase(fetchSearchResults.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.imagesData = action.payload;
            })
            .addCase(fetchSearchResults.rejected, (state) => {
                state.error = true;
                state.status = "rejected";
            });
    },
});

export const { updateImages, incrementPage, decrementPage } = ImagesSlice.actions;

export const getImagesData = (state) => state.images.imagesData;
export const getImagesStatus = (state) => state.images.status;
export const getImagesError = (state) => state.images.error;
export const getCurrentPage = (state) => state.images.page;


