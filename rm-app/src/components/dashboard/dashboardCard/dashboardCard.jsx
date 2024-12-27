import React from "react";
import "./dashboardCard.css";
import { LikeButton } from "../../likeBotton/likeButton";
import { DownloadButton } from "../../downloadButton/downloadButton";
import Chip from "@mui/material/Chip";

export const DashboardCard = ({ imageSrc, isLiked, onLikeToggle, onDownload, onClickImg, tags }) => {
    return (
        <div className="dashboardCard">
            <img src={imageSrc} alt="Dashboard" className="dashboardCard__image" onClick={onClickImg} />
            <div className="dashboardCard__actions__like">
                <LikeButton isLiked={isLiked} onToggle={onLikeToggle} />
            </div>
            <div className="dashboardCard__actions__download">
                <DownloadButton onClick={onDownload} />
            </div>


            <div className="dashboardCard__tags">
                {tags.map((tag, index) => (
                    <Chip key={index} label={tag} color="primary" className="dashboardCard__chip" />
                ))}
            </div>
        </div>
    );
};
