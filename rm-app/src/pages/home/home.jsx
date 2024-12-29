import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImagesData, getImagesStatus, getCurrentPage, incrementPage, decrementPage } from "../../features/images/imagesSlice";
import { GetImagesListThunk } from "../../features/images/imagesThunks";
import { toggleLike, getLikedImages } from "../../features/likes/likesSlice";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Navbar } from "../../components/navbar/navbar";
import { Search } from "../../components/search/search";
import { DashboardCard } from "../../components/dashboard/dashboardCard/dashboardCard";
import { PopupImgInfo } from "../../components/popupImgInfo/popupImgInfo";
import "./home.css";

export const Home = () => {
    const [selectValue, setSelectValue] = useState("");
    const dispatch = useDispatch();
    const images = useSelector(getImagesData);
    const status = useSelector(getImagesStatus);
    const currentPage = useSelector(getCurrentPage);
    const likedImages = useSelector(getLikedImages);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        dispatch(GetImagesListThunk(currentPage));
    }, [dispatch, currentPage]);

    const sortedImages = [...images].sort((a, b) => {
        if (selectValue === "Like") return b.likes - a.likes;
        if (selectValue === "Date") return new Date(b.created_at) - new Date(a.created_at);
        if (selectValue === "Width") return b.width - a.width;
        if (selectValue === "Height") return b.height - a.height;
        return 0;
    });

    const isImageLiked = (imageUrl) =>
        likedImages.some((img) => img.url === imageUrl);

    const handleToggleLike = (image) => {
        dispatch(toggleLike(image));
    };
    const handleImageClick = (image) => {
        console.log("Clicked image:", image);
        setSelectedImage(image);
    };
    const handleClosePopup = () => {
        setSelectedImage(null);
    };




    return (
        <>
            <Navbar />
            <div className="controls">
                <FormControl className="controls__orderBy">
                    <InputLabel id="order-by-select-label">Order By</InputLabel>
                    <Select
                        labelId="order-by-select-label"
                        id="order-by-select"
                        value={selectValue}
                        label="Order By"
                        onChange={(e) => setSelectValue(e.target.value)}
                    >
                        <MenuItem value={"Like"}>Like</MenuItem>
                        <MenuItem value={"Date"}>Date</MenuItem>
                        <MenuItem value={"Width"}>Width</MenuItem>
                        <MenuItem value={"Height"}>Height</MenuItem>
                    </Select>
                </FormControl>
                <Search className="controls__search" onClick={(query) => console.log("Search for:", query)} />
            </div>
            {status === "pending" && <p>Loading...</p>}
            {status === "rejected" && <p>Error loading images</p>}
            <div className="image-list">
                {sortedImages.map((image, index) => (
                    <DashboardCard
                        key={index}
                        imageSrc={image.url}
                        isLiked={isImageLiked(image.url)}
                        downloadLocation={image.download}
                        name={image.alt_description}
                        onLikeToggle={() => handleToggleLike(image)}
                        onClickImg={() => handleImageClick(image)}
                        tags={[]}
                    />
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => dispatch(decrementPage())} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <button onClick={() => dispatch(incrementPage())}>Next Page</button>
            </div>
            {selectedImage && (
                <PopupImgInfo
                    image={selectedImage}
                    onLikeToggle={handleToggleLike}
                    onClose={handleClosePopup}
                />
            )}
        </>
    );
};
