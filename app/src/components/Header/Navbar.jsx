import React, { useState, useEffect } from "react";
import style from "../../styles/Header/Navbar.module.css";

export default function Navbar() {
    const [opened, setOpened] = useState(false);
    const [numOpened, setNumOpened] = useState(0);
    const [showNavbar, setShowNavbar] = useState(false);

    const toggle = () => {
        if (!opened) {
            setShowNavbar(true);
        }
        setOpened(!opened);
        setNumOpened(numOpened + 1);
    };

    useEffect(() => {
        if (!opened && numOpened > 0) {
            const timer = setTimeout(() => {
                setShowNavbar(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [opened, numOpened]);

    return (
        <div className={`${style.navContainer} ${opened ? style.openedBackground : style.closedBackground}`}>
            <div className={style.buttonContainer}>
                <button
                    onClick={toggle}
                    className={`${style.button} ${numOpened !== 0 ? (opened ? style.opened : style.closed) : ''}`}
                >
                    {opened ? <span>&#x2715;</span> : <span>☰</span>}
                </button>
            </div>
            {showNavbar && (
                <div className={`${opened ? style.navbar : style.navbarClosed}`}>
                    <a href="#" className={style.links}>Home</a>
                    <a href="#" className={style.links}>Projects</a>
                    <a href="#" className={style.links}>Skills</a>
                    <a href="#" className={style.links}>Contact</a>
                </div>
            )}
        </div>
    );
}
