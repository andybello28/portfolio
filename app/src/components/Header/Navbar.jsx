import React, { useState } from "react";
import style from "../../styles/Header/Navbar.module.css";

export default function Navbar() {
    const [opened, setOpened] = useState(false);
    const [numOpened, setNumOpened] = useState(0);
    const toggle = () => {
        setOpened(prev => !prev);
        setNumOpened(prev => prev + 1);
        console.log(opened);
    };
    return (
        <div className={style.navContainer}>
            <div className={style.buttonContainer}>
                <button onClick={toggle} className={`${style.button} ${numOpened !== 0 ? (opened ? style.opened : style.closed) : ''}`}>
                    { opened ? (
                        <span>&#x2715;</span>
                    ) : (
                        <span>☰</span>
                    )}
                </button>
            </div>  
            { opened ? (
                <div className={style.navbar}>
                    <a href="#" className={style.links}>Home</a>
                    <a href="#" className={style.links}>Projects</a>
                    <a href="#" className={style.links}>Skills</a>
                    <a href="#" className={style.links}>Contact</a>
                </div> ) : null }
        </div>
    );
}