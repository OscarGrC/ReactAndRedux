import React from "react";
import "./navbar.css";
import navbarBurger from "../../assets/menu-burger.png";
import { Link } from "react-router-dom";
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
                <li className="navbar__item">tag</li>
                <li className="navbar__item">otro tag</li>
                <img src={navbarBurger} alt="navbarBurger" className="navbar__burger" />

            </ul>
        </div>
    );
};

