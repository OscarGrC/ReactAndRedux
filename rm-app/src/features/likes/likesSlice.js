import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
                toast.success("¡Liked!", {
                    position: "top-right",
                    style: {
                        background: "linear-gradient(to right,rgb(30, 209, 72),rgb(9, 80, 24))",
                        color: "#fff",
                    },
                });
            } else {
                state.likedImages.splice(index, 1);
                toast.success("¡UnLiked!", {
                    position: "top-right",
                    style: {
                        background: "linear-gradient(to right,rgb(30, 209, 72),rgb(9, 80, 24))",
                        color: "#fff",
                    },
                });
            }
            saveLikesToStorage(state.likedImages);
        },
    },
});


export const { toggleLike } = LikesSlice.actions;
export const getLikedImages = (state) => state.likes.likedImages;

export default LikesSlice.reducer;
