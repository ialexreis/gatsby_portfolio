import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"
import NavbarMobile from "../components/navbar.mobile"
import illustration from "../utils/img/hello.png"

const Banner = () => {
  return (
    <div className="header-wrapper" id="home">
      <section className="hero is-fullheight" id="hero">
        <NavbarMobile />
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-4 is-offset-1 landing-caption">
                <h1 className="subtitle">Hey there, I'm</h1>
                <h2 className="title">Alexandre</h2>
                <hr/>
                <h1 className="subtitle profession">Backend Developer</h1>
                <div className="button-wrap">
                <Link to="#" className="cta">
                  <span>Resumé</span>
                  <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </Link>
                </div>
              </div>
              <div className="column is-8 img-bg">
                <figure className="image ">
                  <img src={illustration} alt="Description" />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </section>
    </div>
  )
}

export default Banner
