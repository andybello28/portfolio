import React from "react";
import style from "../../styles/Home/Description.module.css";
import profileImage from "../../assets/Profile.jpg";

export default function Description() {
  return (
    <div className={style.container}>
      <img src={profileImage} alt="Profile Image" className={style.profileImage} />
      <div className={style.container2}>
        <div className={style.about}>
            <span>Hey <span className={style.wave}>👋</span></span>
            <span className={style.small}>I'm Andy, a junior at Boston College pursuing a B.S. in Computer Science with a minor in General Business. 
              I'm passionate about staying on top of the latest tech trends and using what I learn to build innovative, user-friendly solutions. In my free time, you’ll often find me hiking, hitting the gym, cheering on Boston sports teams, or enjoying a great movie.
            </span>
            <span className={style.small}>
              So... what are we building next?
            </span>
        </div>
      </div>
    </div>
  );
}