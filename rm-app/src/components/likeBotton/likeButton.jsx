import React from "react";
import "./likeButton.css";

export const LikeButton = ({ isLiked, onToggle }) => {
    return (
        <button className="likeButton" onClick={onToggle}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 0 24 24"
                className={`likeButton__heart ${isLiked ? "likeButton__heart--liked" : ""}`}
            >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.13 2.61h1.74C14.09 5.01 15.76 4 17.5 4 20 4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        </button>
    );
};
