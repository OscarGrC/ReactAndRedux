import { Outlet } from "react-router-dom"
import { Banner } from "../banner/banner"



export const Layout = () => {

    return <>
        <div className="banner">
            <img src={logo} alt="Logotipo" className="banner__logo" />
        </div>
        <Outlet />
        <div className="footer">
            <a href="https://github.com/OscarGrC" target="_blank" rel="noopener noreferrer">
                <img src={git} alt="footerGit" className="footer__git" />
            </a>
            <a href="https://www.linkedin.com/in/oscar-gracia-176935251/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="footerLinkedin" className="footer__Linkedin" />
            </a>
        </div>

    </>
}