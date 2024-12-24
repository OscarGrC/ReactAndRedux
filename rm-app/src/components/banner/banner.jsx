import React from "react";
import "./banner.css";
import logo from "../../assets/logo.png";

export const Banner = () => {
    return (
        <div className="banner">
            <img src={logo} alt="Logotipo" className="banner__logo" />
        </div>
    );
};
