import React, { useState, useEffect } from "react";
import style from "../../styles/Header/Navbar.module.css";

export default function Navbar() {
    const [opened, setOpened] = useState(false);
    const [numOpened, setNumOpened] = useState(0);
    const [delayedOpened, setDelayedOpened] = useState(false);

    const toggle = () => {
        setOpened(!opened);
        setNumOpened(numOpened + 1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedOpened(opened);
        }, 200);

        return () => clearTimeout(timer);
    }, [opened]);

    return (
        <div className={`${style.navContainer} ${opened ? style.openedBackground : style.closedBackground}`}>
            <div className={style.buttonContainer}>
                <button onClick={toggle} className={`${style.button} ${opened ? style.opened : ''}`}>
                    <span className={style.line1}></span>
                    <span className={style.line2}></span>
                    <span className={style.line3}></span>
                </button>
            </div>
            {delayedOpened && (
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
