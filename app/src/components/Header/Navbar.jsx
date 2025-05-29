import React, { useState } from "react";
import style from "../../styles/Navbar.module.css";

export default function Navbar() {
    const [opened, setOpened] = useState(false);
    const toggle = () => {
        setOpened(!opened);
        console.log(opened);
    };
    return (
        <div className={style.navbar}>
            {
            opened
                ? <>
                    <button onClick={toggle}> X </button>
                    <a href="#" className={style.links}>Home</a>
                    <a href="#" className={style.links}>Projects</a>
                    <a href="#" className={style.links}>Skills</a>
                    <a href="#" className={style.links}>Contact</a> 
                </>:  
                <button onClick={toggle}>
                    Button
                </button>
            }
        </div>
    );
}