import { createSlice } from "@reduxjs/toolkit";
import { GetImagesListThunk } from "./imagesThunk";



export const ImagesSlice = createSlice({
    name: "images",
    initialState: {
        data: [],
        status: "idle",
        error: false
    },
    reducers: {
        "AddImages": (state, action) => {
            /////
            state.data.push({ name: action.payload })
        }
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

export const { AddImages } = ImagesSlice.actions