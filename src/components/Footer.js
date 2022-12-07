import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/amanda-wongg/">
                <LinkedInIcon />
                </a>
                <a href="https://github.com/amanda-w">
                <GitHubIcon />
                </a>
            </div>
            <p>Copyright 2022</p>
        </div>
    );
}

export default Footer;