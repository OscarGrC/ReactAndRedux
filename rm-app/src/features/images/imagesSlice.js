import { createSlice } from "@reduxjs/toolkit";
import { GetImagesListThunk } from "./imagesThunks";



export const ImagesSlice = createSlice({
    name: "images",
    initialState: {
        data: [],
        status: "idle",
        error: false,
        page: 1
    },
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
        },
        decrementPage: (state) => {
            if (state.page > 1) {
                state.page -= 1;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(GetImagesListThunk.pending, (state, action) => {
            state.status = "pending"
        })
            .addCase(GetImagesListThunk.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.data = action.payload
            })
            .addCase(GetImagesListThunk.rejected, (state, action) => {
                state.error = true
                state.status = "rejected"
            })
    }
})
export const getImagesData = (state) => state.images.data
export const getImagesStatus = (state) => state.images.status
export const getImagesError = (state) => state.images.error
export const getCurrentPage = (state) => state.images.page;

export const { incrementPage, decrementPage } = ImagesSlice.actions