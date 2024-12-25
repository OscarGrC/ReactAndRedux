import React from "react";
import "./footer.css";
import git from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
export const Footer = () => {
    return (
        <div className="footer">
            <a href="https://github.com/OscarGrC" target="_blank" rel="noopener noreferrer">
                <img src={git} alt="footerGit" className="footer__git" />
            </a>
            <a href="https://www.linkedin.com/in/oscar-gracia-176935251/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="footerLinkedin" className="footer__Linkedin" />
            </a>
        </div>
    );
};
