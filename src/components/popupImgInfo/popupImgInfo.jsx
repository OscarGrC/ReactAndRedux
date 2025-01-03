import React from "react";
import { DownloadButton } from "../downloadButton/downloadButton";
import { LikeButton } from "../likeBotton/likeButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike, getLikedImages } from "../../features/likes/likesSlice";
import "./popupImgInfo.css";

export const PopupImgInfo = ({ image, onClose }) => {
    const dispatch = useDispatch();
    const likedImages = useSelector(getLikedImages);


    const isImageLiked = (imageUrl) =>
        likedImages.some((img) => img.url === imageUrl);


    const handleToggleLike = () => {
        dispatch(toggleLike(image));
    };

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

    return (
        <div className="popupImgInfo">
            <div className="popupImgInfo__content">
                <button className="popupImgInfo__close" onClick={onClose}>
                    X
                </button>
                <img src={image.url} alt={image.description} className="popupImgInfo__image" />
                <div className="popupImgInfo__details">
                    <h2>{image.description || transformDescription(image.alt_description)}</h2>
                    <p>Width: {image.width}</p>
                    <p>Height: {image.height}</p>
                    <p>Likes: {image.likes}</p>
                    <p>Date: {transformDate(image.created_at)}</p>
                    <div className="popupImgInfo__actions">
                        <LikeButton isLiked={isImageLiked(image.url)} onToggle={handleToggleLike} />
                        <DownloadButton downloadLocation={image.download} name={image.description || "image.jpg"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

