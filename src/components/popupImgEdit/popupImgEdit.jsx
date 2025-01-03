import React, { useState } from "react";
import "./popupImgEdit.css";
import editIcon from "../../assets/edit.png";
import saveIcon from "../../assets/disk.png";
import { DownloadButton } from "../downloadButton/downloadButton";
import { LikeButton } from "../likeBotton/likeButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike, getLikedImages } from "../../features/likes/likesSlice";

export const PopupImgEdit = ({ image, onClose }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(image.description || "");
    const dispatch = useDispatch();
    const likedImages = useSelector(getLikedImages);
    const isImageLiked = (imageUrl) =>
        likedImages.some((img) => img.url === imageUrl);


    const handleToggleLike = () => {
        dispatch(toggleLike(image));
    };
    const handleEditClick = () => {
        if (isEditing) {
            const likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];
            const updatedImages = likedImages.map((img) =>
                img.url === image.url ? { ...img, description: newDescription } : img
            );
            localStorage.setItem("likedImages", JSON.stringify(updatedImages));
            toast.success("¡Éxito al cambiar la descripción!", {
                position: "top-right",
                style: {
                    background: "linear-gradient(to right,rgb(30, 209, 72),rgb(9, 80, 24))",
                    color: "#fff",
                },
            });
        }
        setIsEditing(!isEditing);
    };





    return (
        <div className="popupImgEdit">
            <div className="popupImgEdit__content">
                <button className="popupImgEdit__close" onClick={onClose}>
                    X
                </button>
                <img src={image.url} alt={image.description} className="popupImgEdit__image" />
                <div className="popupImgEdit__details">
                    <div className="popupImgEdit__header">
                        {isEditing ? (
                            <input
                                className="popupImgEdit__header__input"
                                type="text"
                                value={newDescription}
                                onChange={(e) => setNewDescription(e.target.value)}
                                autoFocus
                            />
                        ) : (
                            <h2>{newDescription || "No description"}</h2>
                        )}
                        <img
                            src={isEditing ? saveIcon : editIcon}
                            alt={isEditing ? "Save" : "Edit"}
                            onClick={handleEditClick}
                            className="popupImgEdit__icon"
                        />
                    </div>
                    <p>Width: {image.width}</p>
                    <p>Height: {image.height}</p>
                    <p>Likes: {image.likes}</p>
                    <p>Date: {image.created_at}</p>
                    <div className="popupImgEdit__actions">
                        <LikeButton isLiked={isImageLiked(image.url)} onToggle={handleToggleLike} />
                        <DownloadButton downloadLocation={image.download} name={image.description || "image.jpg"} />
                    </div>
                </div>
            </div>
        </div>
    );
};
