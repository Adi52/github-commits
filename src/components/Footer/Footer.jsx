import React from 'react';
import {
    Copyright,
    CopyrightIcon,
    Github,
    GithubIcon,
    Localization,
    LocalizationIcon,
    Mail,
    MailIcon,
    Wrapper
} from "./Footer.css";


const Footer = () => {



    return (
        <Wrapper>
            <Copyright>
                <CopyrightIcon />
                <p>2020 Adi52</p>
            </Copyright>

            <Github href={"https://github.com/adi52"} target={"_blank"}>
                <GithubIcon />
                <p>Adi52</p>
            </Github>

            <Mail href={"mailto:adrian@bielinski.dev"}>
                <MailIcon />
                <p>adrian@bielinski.dev</p>
            </Mail>

            <Localization>
                <LocalizationIcon />
                <p>Poland, Gdańsk</p>
            </Localization>
        </Wrapper>
    );
};

export default Footer;