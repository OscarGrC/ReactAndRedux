import { createAsyncThunk } from "@reduxjs/toolkit";



export const GetImagesListThunk = createAsyncThunk("images/getImagesListFromApi", async (page = 1) => {
    try {
        const request = await fetch(`https://api.unsplash.com/photos?client_id=uoxX9Z7KM0QQXlfHCbh0e95o5UMq05AMit4q7yfx4Ic&page=${page}`)
        if (request.ok) {
            const imagesDataJson = await request.json()
            return imagesDataJson.map((item) => ({
                created_at: item.created_at,
                width: item.width,
                height: item.height,
                alt_description: item.alternative_slugs.es,
                url: item.urls.small,
                download: item.links.download_location,
                likes: item.likes,
                description: item.description,
            }));
        } else {
            return []
        }
    } catch (error) {
        console.log(error)

    }
})