import React, { useState, useMemo, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "../../components/navbar/navbar";
import { Search } from "../../components/search/search";
import { DashboardCard } from "../../components/dashboard/dashboardCard";
import { PopupImgEdit } from "../../components/popupImgEdit/popupImgEdit"
import { toggleLike, getLikedImages } from "../../features/likes/likesSlice";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "../home/home.css";

export const MyPhotos = () => {
    const dispatch = useDispatch();
    const likedImagesFromRedux = useSelector(getLikedImages);
    const [likedImages, setLikedImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectValue, setSelectValue] = useState("");
    const [query, setQuery] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [applyMargin, setApplyMargin] = useState(false);
    const imagesPerPage = 10;

    const imageListRef = useRef(null);

    useEffect(() => {
        setLikedImages(likedImagesFromRedux);
    }, [likedImagesFromRedux]);

    const filteredImages = useMemo(() => {
        let images = likedImages;

        if (query) {
            images = images.filter((image) =>
                image.description?.replace(/-/g, " ").toLowerCase().includes(query.toLowerCase())
            );
        }

        if (selectValue === "Like") {
            images = [...images].sort((a, b) => b.likes - a.likes);
        } else if (selectValue === "Date") {
            images = [...images].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (selectValue === "Width") {
            images = [...images].sort((a, b) => b.width - a.width);
        } else if (selectValue === "Height") {
            images = [...images].sort((a, b) => b.height - a.height);
        }

        return images;
    }, [query, selectValue, likedImages]);

    const paginatedImages = useMemo(() => {
        const startIndex = (currentPage - 1) * imagesPerPage;
        return filteredImages.slice(startIndex, startIndex + imagesPerPage);
    }, [currentPage, filteredImages]);

    const handleSearch = (query) => {
        setQuery(query);
        setCurrentPage(1);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClosePopup = () => {
        setSelectedImage(null);
        refreshImages();
    };

    const handleToggleLike = (image) => {
        dispatch(toggleLike(image));
    };


    const refreshImages = () => {
        const localImages = JSON.parse(localStorage.getItem("likedImages")) || [];
        setLikedImages([...localImages]);
    };

    useEffect(() => {
        const handleResize = () => {
            if (imageListRef.current) {
                const containerHeight = imageListRef.current.offsetHeight;
                setApplyMargin(containerHeight < 250);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [paginatedImages]);

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

                <Search className="controls__search" onClick={handleSearch} />
            </div>

            {paginatedImages.length === 0 && <p>No images found.</p>}
            <div
                ref={imageListRef}
                className="image-list"
                style={{
                    marginBottom: applyMargin ? "calc(67vh - 304px)" : "0",
                }}
            >
                {paginatedImages.map((image, index) => (
                    <DashboardCard
                        key={index}
                        imageSrc={image.url}
                        isLiked={true}
                        downloadLocation={image.download}
                        name={image.description?.replace(/-/g, " ")}
                        onLikeToggle={() => handleToggleLike(image)}
                        onClickImg={() => handleImageClick(image)}
                        tags={[]}
                    />
                ))}
            </div>

            <div className="pagination">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous Page
                </button>
                <button
                    onClick={() =>
                        setCurrentPage((prev) =>
                            prev * imagesPerPage < filteredImages.length ? prev + 1 : prev
                        )
                    }
                    disabled={currentPage * imagesPerPage >= filteredImages.length}
                >
                    Next Page
                </button>
            </div>

            {selectedImage !== null ? (
                <PopupImgEdit
                    image={selectedImage}
                    onClose={handleClosePopup}
                />
            ) : <></>}
        </>
    );
};

