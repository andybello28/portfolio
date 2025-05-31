import React from "react";
import Header from "../Header/Header"
import HeightsHousing from "./HeightHousing";
import Footer from "../Footer/Footer"
import style from "../../styles/Projects/Projects.module.css";

export default function Projects() {
    return (
        <div className={style.container}>
            <Header/>
            <span>Projects</span>
            <HeightsHousing/>
            <Footer/>
        </div>
    )
}