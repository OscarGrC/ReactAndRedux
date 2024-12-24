import { createAsyncThunk } from "@reduxjs/toolkit";



export const GetImagesListThunk = createAsyncThunk("images/getImagesListFromApi", async () => {

    try {
        const request = await fetch("https://api.unsplash.com/photos?client_id=uoxX9Z7KM0QQXlfHCbh0e95o5UMq05AMit4q7yfx4Ic")
        if (request.ok) {
            const imagesDataJson = await request.json()
            return imagesDataJson.items
        }
    } catch (error) {
        console.log(error)

    }
})