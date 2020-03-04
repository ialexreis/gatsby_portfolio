import React from "react"


const NavbarMobile = () => {
    return (
        <nav class="navbar is-transparent is-hidden-desktop">
        <div class="navbar-brand">
        <div class="navbar-burger burger" data-target="mobile-nav">
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>
        <div id="mobile-nav" class="navbar-menu">
        <div class="navbar-end">
            <div class="navbar-item">
            <a class="navbar-item" href="#home">
                Home
            </a>
            </div>
            <div class="navbar-item">
            <a class="navbar-item" href="#about-me">
                About Me
            </a>
            </div>
            <div class="navbar-item">
            <a class="navbar-item" href="#services">
                Services
            </a>
            </div>
            <div class="navbar-item">
            <a class="navbar-item" href="#skills">
                Skills
            </a>
            </div>
            <div class="navbar-item">
            <a class="navbar-item" href="#my-work">
                My Work
            </a>
            </div>
            <div class="navbar-item">
            <a class="navbar-item" href="#contact">
                Contact
            </a>
            </div>
        </div>
        </div>
    </nav>
    )
}

export default NavbarMobile