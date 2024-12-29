import React from "react";
import { DownloadButton } from "../downloadButton/downloadButton";
import { LikeButton } from "../likeBotton/likeButton";
import "./popupImgInfo.css";

export const PopupImgInfo = ({ image, onLikeToggle, onClose }) => {
    return (
        <div className="popupImgInfo">
            <div className="popupImgInfo__content">
                <button className="popupImgInfo__close" onClick={onClose}>
                    X
                </button>
                <img src={image.url} alt={image.description} className="popupImgInfo__image" />
                <div className="popupImgInfo__details">
                    <h2>{image.description || "No description available"}</h2>
                    <p>Size: {image.width} x {image.height}</p>
                    <p>Likes:{image.likes}</p>
                    <div className="popupImgInfo__actions">
                        <LikeButton isLiked={image.isLiked} onToggle={() => onLikeToggle(image)} />
                        <DownloadButton downloadLocation={image.download} name={image.description || "image.jpg"} />
                    </div>
                </div>
            </div>
        </div>
    );
};
