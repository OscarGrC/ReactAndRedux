import React from "react";
import "./dashboardCard.css";
import { LikeButton } from "../likeBotton/likeButton";
import { DownloadButton } from "../downloadButton/downloadButton";
import Chip from "@mui/material/Chip";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike, getLikedImages } from "../../features/likes/likesSlice";

export const DashboardCard = ({ image, onClickImg, tags }) => {
    const dispatch = useDispatch();
    const likedImages = useSelector(getLikedImages);
    const isImageLiked = likedImages.some((img) => img.url === image.url);
    const handleToggleLike = () => {
        dispatch(toggleLike(image));
    };

    return (
        <div className="dashboardCard">
            <img
                src={image.url}
                alt="Dashboard"
                className="dashboardCard__image"
                onClick={onClickImg}
            />
            <div className="dashboardCard__actions__like">
                <LikeButton isLiked={isImageLiked} onToggle={handleToggleLike} />
            </div>
            <div className="dashboardCard__actions__download">
                <DownloadButton
                    downloadLocation={image.download}
                    name={image.description}
                />
            </div>
            <div className="dashboardCard__tags">
                {tags.map((tag, index) => (
                    <Chip
                        key={index}
                        label={tag}
                        color="primary"
                        className="dashboardCard__chip"
                    />
                ))}
            </div>
        </div>
    );
};
