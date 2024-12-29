import React from "react";
import "./downloadButton.css";
import down from "/src/assets/download.png";
import { saveAs } from "file-saver";

export const DownloadButton = ({ downloadLocation, name }) => {

    const onDownload = () => {
        saveAs(downloadLocation, name);
    };
    return (
        <button className="downloadButton" onClick={onDownload}>
            <img src={down} className="downloadButton__img" alt="Download" />
        </button>
    );
};
