import React from "react"
import Navbar from "../components/navbar"
import NavbarMobile from "../components/navbar.mobile"
import illustration from "../utils/imagens/hello.png"
import Loadable from "@loadable/component"
import cv from "../utils/resume/alexandreReis.pdf"


const LoadableTypewriter = Loadable(() =>
  import("../components/partials/typing.effect"),
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
              </div>
              <div className="column is-6-desktop is-7 is-two-thirds is-two-fifths-tablet is-11-mobile img-bg ">
                <h1 className="title">👋 &nbsp;
                  <span className="border-0" style={{ width: "max-content" }} contentEditable="true" spellCheck="false">I'm Alex Reis</span>
                </h1>
                <h1 className="subtitle profession">
                  <LoadableTypewriter />
                </h1>
                <div className="has-text-right has-margin-top-4">
                  a backend software engineer 👨‍💻, developing software solutions in sectors like politics,
                  automotive, travels and sports.
                  Spending time between Aveiro & Porto.
                </div>
                <div className="ml-96">
                  Backend Engineer @ <a className="hover:text-black hover:font-bold" href="https://7egend.cr">7EGEND</a>.
                  Spend most of my time thinking about startups, developing, motorcycles and surfing.
                </div>
                <div className="spacer"></div>
                <div className="ml-96">
                  Feel free to check my work and more about me on ⬇️
                </div>
                <div id="scroll-down">
                  <span className="arrow-down">
                  </span>
                  <span id="scroll-title">
                    Scroll down
                  </span>
                </div>
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
