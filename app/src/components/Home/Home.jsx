import React from "react";
import Header from "../Header/Header";
import Description from "./Description";
import Footer from "../Footer"
import style from "../../styles/Home.module.css";

export default function Head() {
    return (
        <div className={style.container}>
            <Header/>
            <Description/>
            <Footer/>
        </div>
    );
}