import React from "react"


const NavbarMobile = () => {
    return (
        <nav className="navbar is-transparent is-hidden-desktop">
        <div className="navbar-brand">
        <div className="navbar-burger burger" data-target="mobile-nav">
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
        <div id="mobile-nav" className="navbar-menu">
        <div className="navbar-end">
            <div className="navbar-item">
            <a className="navbar-item" href="#home">
                Home
            </a>
            </div>
            <div className="navbar-item">
            <a className="navbar-item" href="#about-me">
                About Me
            </a>
            </div>
            <div className="navbar-item">
            <a className="navbar-item" href="#services">
                Services
            </a>
            </div>
            <div className="navbar-item">
            <a className="navbar-item" href="#skills">
                Skills
            </a>
            </div>
            <div className="navbar-item">
            <a className="navbar-item" href="#my-work">
                My Work
            </a>
            </div>
            <div className="navbar-item">
            <a className="navbar-item" href="#contact">
                Contact
            </a>
            </div>
        </div>
        </div>
    </nav>
    )
}

export default NavbarMobile