import React from "react"

export default () => (
  <nav className="navbar is-transparent custom-nav" role="navigation" aria-label="main navigation">
   <div className="container">
    <div className="navbar-brand">
      <a className="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo-white.png"
          alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
          width="112"
          height="28"
        />
      </a>
      <a href="#" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div className="navbar-menu">
        <div className="navbar-end">
            <a href="#" className="navbar-item">About Me</a>
            <a href="#" className="navbar-item">Projects</a>
            <a href="#" className="navbar-item">Uses</a>
            <a href="#" className="button is-danger is-rounded">Contacts</a>
        </div>
    </div>
    </div>
  </nav>
)
