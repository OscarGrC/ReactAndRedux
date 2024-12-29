import React from "react";
import "./downloadButton.css";
import down from "/src/assets/download.png";

export const DownloadButton = ({ downloadLocation, name }) => {
    const onDownload = () => {
        const accessKey = 'uoxX9Z7KM0QQXlfHCbh0e95o5UMq05AMit4q7yfx4Ic';
        fetch(downloadLocation, {
            method: 'GET',
            headers: {
                'Authorization': `Client-ID ${accessKey}`
            }
        })
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.url;
                return fetch(imageUrl);
            })
            .then(response => response.blob())
            .then(blob => {
                saveAs(blob, name);
            })
            .catch((error) => console.error("Error downloading the image:", error));
    };

    return (
        <button className="downloadButton" onClick={onDownload}>
            <img src={down} className="downloadButton__img" alt="Download" />
        </button>
    );
};
