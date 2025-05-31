import React from "react";
import Navbar from "./Navbar";
import style from "../../styles/Header/Header.module.css";

export default function Header() {
    return (
    <div className={style.navbar}>
        <Navbar/>
    </div>
    )
}