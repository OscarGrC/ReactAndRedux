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



    return (
        <div className="popupImgInfo">
            <div className="popupImgInfo__content">
                <button className="popupImgInfo__close" onClick={onClose}>
                    X
                </button>
                <img src={image.url} alt={image.description} className="popupImgInfo__image" />
                <div className="popupImgInfo__details">
                    <h2>{image.description}</h2>
                    <p>Width: {image.width}</p>
                    <p>Height: {image.height}</p>
                    <p>Likes: {image.likes}</p>
                    <p>Date: {image.created_at}</p>
                    <div className="popupImgInfo__actions">
                        <LikeButton isLiked={isImageLiked(image.url)} onToggle={handleToggleLike} />
                        <DownloadButton downloadLocation={image.download} name={image.description || "image.jpg"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

