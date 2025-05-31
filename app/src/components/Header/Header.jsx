import React from "react";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import style from "../../styles/Header/Header.module.css";

export default function Header() {
    return (
    <div className={style.header}>
        <div className={style.navbar}>
            <Navbar/>
        </div>
        <Introduction/>
    </div>
    )
}