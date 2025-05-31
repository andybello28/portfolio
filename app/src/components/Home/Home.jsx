import React from "react";
import Header from "../Header/Header";
import Description from "./Description";
import Footer from "../Footer/Footer"
import style from "../../styles/Home/Home.module.css";
import Introduction from "./Introduction";

export default function Head() {
    return (
        <div className={style.container}>
            <Header/>
            <Introduction/>
            <Description/>
            <Footer/>
        </div>
    );
}