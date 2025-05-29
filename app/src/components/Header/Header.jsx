import React from "react";
import Introduction from "./Introduction";
import Navbar from "./Navbar";
import style from "../../styles/Header.module.css";

export default function Header() {
    return (
        <div className={style.header}>
            <Introduction/>
            <Navbar/>
        </div>
    )
}