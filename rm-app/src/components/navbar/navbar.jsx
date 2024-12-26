import React from "react";
import "./navbar.css";
import navbarBurger from "../../assets/menu-burger.png";
import { Link } from "react-router-dom";
import { Chip } from "@mui/material";
export const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar__list">
                <li className="navbar__link">
                    <Link to="/">Galeria</Link>
                </li>
                <li className="navbar__link">
                    <Link to="/MyPhotos">My Photos</Link>
                </li>
                <li className="navbar__separador">|</li>
                <Chip label="Tag" color="primary" className="navbar__item" />
                <Chip label="Otro tag" color="primary" className="navbar__item" />
                <img src={navbarBurger} alt="navbarBurger" className="navbar__burger" />

            </ul>
        </div>
    );
};

