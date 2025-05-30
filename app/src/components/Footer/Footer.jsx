import React from "react";
import style from "../../styles/Footer/Footer.module.css";
import inImage from "../../assets/LinkedIn.png";
import githubImage from "../../assets/Github.png";
import resumeImage from "../../assets/Cv.png";
import resumeLink from "../../assets/Resume.docx.pdf";

export default function Footer() {
    return (
        <div className={style.links}>
            <a href="https://www.linkedin.com/in/andy-bello/"><img src={inImage} className={style.in} alt="LinkedIn Icon"/></a>
            <a href="https://github.com/andybello28"><img src={githubImage} alt="Github Icon"/></a>
            <a href={resumeLink}><img src={resumeImage} alt="Resume Icon"/></a>
        </div>
    );
}