import React from "react";
import style from "../../styles/Home/Introduction.module.css";

export default function Introduction() {
    return (
        <div className={style.container}>
            <span className={style.name}>Andy Bello </span>
            <span className={style.fullstack}>Computer Science Student at Boston College</span>
        </div>
    );
}