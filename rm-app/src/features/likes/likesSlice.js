import { createSlice } from "@reduxjs/toolkit";

const getLikesFromStorage = () => {
    const storedLikes = localStorage.getItem("likedImages");
    return storedLikes ? JSON.parse(storedLikes) : [];
};


const saveLikesToStorage = (likes) => {
    localStorage.setItem("likedImages", JSON.stringify(likes));
};

export const LikesSlice = createSlice({
    name: "likes",
    initialState: {
        likedImages: getLikesFromStorage(),
    },
    reducers: {
        toggleLike: (state, action) => {
            const image = action.payload;
            const index = state.likedImages.findIndex((img) => img.url === image.url);

            if (index === -1) {
                state.likedImages.push(image);
            } else {
                state.likedImages.splice(index, 1);
            }
            saveLikesToStorage(state.likedImages);
        },
    },
});


export const { toggleLike } = LikesSlice.actions;
export const getLikedImages = (state) => state.likes.likedImages;

export default LikesSlice.reducer;
