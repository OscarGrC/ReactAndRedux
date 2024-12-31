import { Outlet } from "react-router-dom"
import "./layout.css";
import logo from "../../assets/logo.png"
import git from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import { ToastContainer } from "react-toastify";

export const Layout = () => {

    return <>
        <div className="banner">
            <img src={logo} alt="Logotipo" className="banner__logo" />
        </div>
        <ToastContainer autoClose={3000} />
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
