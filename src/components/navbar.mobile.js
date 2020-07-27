import React, { useState, useEffect } from "react"
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from "styled-components";

const MobileButton = styled.button`
    border: 0;
    background: transparent;
    font-size: 16px
`

const NavbarMobile = () => {

    const [is_active, setIsActive] = useState(false);

    useEffect(() => {   
        const handleClick = () =>{
            let burguer = document.getElementById("burguer-menu");   
            burguer.onClick = setIsActive(!is_active);
        }
        document.addEventListener("click", handleClick)
        return () => {
            document.removeEventListener("click", handleClick)
        }
    }, [is_active])

    return (
        <nav className="navbar is-transparent is-hidden-desktop">
        <div className="navbar-brand">
        <div id="burguer-menu" className={is_active ? "navbar-burger burger is-active" : "navbar-burger burger"} data-target="mobile-nav">
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
        <div id="mobile-nav" className={is_active ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-end">
            <div className="navbar-item">
            <MobileButton className="navbar-item" onClick={() => scrollTo('#about')} >About Me</MobileButton>
            </div>
            <div className="navbar-item">
            <MobileButton className="navbar-item" onClick={() => scrollTo('#stack')}>Stack</MobileButton>
            </div>
            <div className="navbar-item">
            <MobileButton className="navbar-item" onClick={() => scrollTo('#projects')}>Projects</MobileButton>
            </div>
            <div className="navbar-item">
            <MobileButton className="navbar-item" onClick={() => scrollTo('#contact')}>Contact</MobileButton>
            </div>
            <div className="navbar-item">
            <a className="navbar-item" href="#">
                Uses
            </a>
            </div>
        </div>
        </div>
    </nav>
    )
}

export default NavbarMobile