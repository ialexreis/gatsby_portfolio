import React from "react"
import Navbar from "../components/navbar"
import NavbarMobile from "../components/navbar.mobile"
import illustration from "../utils/imagens/hello.png"
import Loadable from "@loadable/component"
import cv from "../utils/resume/alexandreReis.pdf"


const LoadableTypewriter = Loadable(() =>
  import("../components/partials/typing.effect")
)

const Banner = () => {
  return (
    <div className="header-wrapper" id="home">
      <section className="hero is-fullheight" id="hero">
        <NavbarMobile />
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-4 is-12-mobile landing-caption">
                <h1 className="subtitle">Hey there, I'm</h1>
                <h2 className="title">Alexandre</h2>
                <hr/>
                <h1 className="subtitle profession">
                  <LoadableTypewriter />
                  </h1>
                <div className="button-wrap">
                  <a id="view_more" href={cv} className="cta has-title-color" target="_blank">
                    <span>Resumé</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="column is-6-desktop  is-7 is-two-thirds is-two-fifths-tablet is-11-mobile img-bg">
                <figure className="image">
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
