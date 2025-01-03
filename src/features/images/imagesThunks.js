import { createAsyncThunk } from "@reduxjs/toolkit";

const transformDescription = (description) => {
    const words = description.split('-');
    words.pop();
    const transformedDescription = words.join(' ');
    return transformedDescription.charAt(0).toUpperCase() + transformedDescription.slice(1);
};
const transformDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

export const GetImagesListThunk = createAsyncThunk("images/getImagesListFromApi", async (page = 1) => {
    try {
        const request = await fetch(`https://api.unsplash.com/photos?client_id=uoxX9Z7KM0QQXlfHCbh0e95o5UMq05AMit4q7yfx4Ic&page=${page}`)
        if (request.ok) {
            const imagesDataJson = await request.json()
            return imagesDataJson.map((item) => ({
                created_at: transformDate(item.created_at),
                width: item.width,
                height: item.height,
                url: item.urls.small,
                download: item.urls.full,
                likes: item.likes,
                description: item.description || transformDescription(item.alternative_slugs.es),
            }));
        } else {
            return []
        }
    } catch (error) {
        console.log(error)

    }
})