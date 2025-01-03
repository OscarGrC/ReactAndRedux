import React from "react";
import logo from "../../assets/logo.png"
import git from "../../assets/github.png"
import navbarBurger from "../../assets/menuBurger.png";
import linkedin from "../../assets/linkedin.png"
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { Chip } from "@mui/material";
import { Outlet } from "react-router-dom"
import "./layout.css";

export const Layout = () => {

    return <>
        <div className="banner">
            <img src={logo} alt="Logotipo" className="banner__logo" />
        </div>
        <ToastContainer autoClose={3000} />
        <div className="navbar">
            <ul className="navbar__list">
                <li className="navbar__link">
                    <Link to="/">Galeria</Link>
                </li>
                <li className="navbar__link">
                    <Link to="/MyPhotos">My Photos</Link>
                </li>
                <li className="navbar__separador">|</li>
                <Chip label="Estos Tag" color="primary" className="navbar__item" />
                <Chip label="son ejemplos" color="primary" className="navbar__item" />
                <Chip label="falta enlazar a Colections" color="primary" className="navbar__item" />
                <img src={navbarBurger} alt="navbarBurger" className="navbar__burger" />

            </ul>
        </div>
        <Outlet />
        <div className="footer">
            <a href="https://github.com/OscarGrC" target="_blank">
                <img src={git} alt="footerGit" className="footer__git" />
            </a>
            <a href="https://www.linkedin.com/in/oscar-gracia-176935251/" target="_blank">
                <img src={linkedin} alt="footerLinkedin" className="footer__Linkedin" />
            </a>
        </div>

    </>
}
