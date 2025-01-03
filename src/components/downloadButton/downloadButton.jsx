import React from "react";
import "./downloadButton.css";
import down from "/src/assets/download.png";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DownloadButton = ({ downloadLocation, name }) => {

    const onDownload = () => {
        saveAs(downloadLocation, name);
        toast.success("¡Éxito al realizar la descarga!", {
            position: "top-right",
            style: {
                background: "linear-gradient(to right,rgb(30, 209, 72),rgb(9, 80, 24))",
                color: "#fff",
            },
        });
    };
    return (
        <button className="downloadButton" onClick={onDownload}>
            <img src={down} className="downloadButton__img" alt="Download" />
        </button>
    );
};
