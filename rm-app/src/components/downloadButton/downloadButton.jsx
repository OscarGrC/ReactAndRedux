import React from "react";
import "./downloadButton.css";
import down from "/src/assets/download.png";


export const DownloadButton = ({ onClick }) => {
    return (
        <button className="downloadButton" onClick={onClick}>
            <img src={down} className="downloadButton__img" />
        </button>
    );
};
