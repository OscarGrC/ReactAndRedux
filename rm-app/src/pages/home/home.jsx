import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Navbar } from "../../components/navbar/navbar";
import { Search } from "../../components/search/search";
import { DashboardCard } from "../../components/dashboard/dashboardCard/dashboardCard";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage, decrementPage, getCurrentPage, getImagesData, getImagesStatus } from "../../features/images/imagesSlice";
import { GetImagesListThunk } from "../../features/images/imagesThunks";
import "./home.css";

export const Home = () => {
    const [selectValue, setSelectValue] = useState("");
    const dispatch = useDispatch();
    const images = useSelector(getImagesData);
    const status = useSelector(getImagesStatus);
    const currentPage = useSelector(getCurrentPage);

    useEffect(() => {
        dispatch(GetImagesListThunk(currentPage));
    }, [dispatch, currentPage]);

    const searchFuntion = (query) => {
        console.log("Search for:", query);
    };

    const orderByFuntion = (event) => {
        setSelectValue(event.target.value);
    };

    const sortedImages = [...images].sort((a, b) => {
        if (selectValue === "Like") return b.likes - a.likes;
        if (selectValue === "Date") return new Date(b.created_at) - new Date(a.created_at);
        if (selectValue === "Width") return b.width - a.width;
        if (selectValue === "Height") return b.height - a.height;
        return 0;
    });

    return (
        <>
            <Navbar />
            <div className="controls">
                <FormControl className="controls__orderBy">
                    <InputLabel id="demo-simple-select-label">Order By</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectValue}
                        label="orderBy"
                        onChange={orderByFuntion}
                    >
                        <MenuItem value={"Like"}>Like</MenuItem>
                        <MenuItem value={"Date"}>Date</MenuItem>
                        <MenuItem value={"Width"}>Width</MenuItem>
                        <MenuItem value={"Height"}>Height</MenuItem>
                    </Select>
                </FormControl>
                <Search className="controls__search" onClick={searchFuntion} />
            </div>
            {status === "pending" && <p>Loading...</p>}
            {status === "rejected" && <p>Error loading images</p>}
            <div className="image-list">
                {sortedImages.map((image, index) => (
                    <DashboardCard
                        key={index}
                        imageSrc={image.url}
                        isLiked={false}
                        onLikeToggle={() => console.log("like", image)}
                        onDownload={() => console.log("download", image)}
                        onClickImg={() => console.log("click en img", image)}
                        tags={[]}
                    />
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => dispatch(decrementPage())} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <button onClick={() => dispatch(incrementPage())}>
                    Next Page
                </button>
            </div>
        </>
    );
};
