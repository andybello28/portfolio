import React from "react";
import Description from "./Description";
import Links from "./Links";
import style from "../styles/Head.module.css";

export default function Head() {
    return (
        <div className={style.container}>
            <Description/>
            <Links/>
        </div>
    );
}