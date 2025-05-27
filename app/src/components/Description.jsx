import React from "react";
import style from "../styles/Description.module.css";
import profileImage from "../assets/Profile.jpg";
import inImage from "../assets/LinkedIn.png";
import githubImage from "../assets/Github.png";
import resumeImage from "../assets/Cv.png";
import resumeLink from "../assets/Resume.docx.pdf";

export default function Description() {
  return (
    <div className={style.container}>
      <img src={profileImage} alt="Profile" className={style.profileImage} />
      <div className={style.container2}>
        <div className={style.about}>
            <span>Hey <span className={style.wave}>👋</span></span>
        </div>
        <div className={style.links}>
            <a href="https://www.linkedin.com/in/andy-bello/"><img src={inImage} className={style.in}/></a>
            <a href="https://github.com/andybello28"><img src={githubImage}/></a>
            <a href={resumeLink}><img src={resumeImage}/></a>
        </div>
      </div>
    </div>
  );
}