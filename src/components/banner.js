import React from "react"
import Navbar from "../components/navbar"
import NavbarMobile from "../components/navbar.mobile"
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons"
import Loadable from "@loadable/component"
import cv from "../utils/resume/alexandreReis.pdf"
import { DiStackoverflow } from "react-icons/all"
import Social from "../configs/social"


const LoadableTypewriter = Loadable(() =>
  import("../components/partials/typing.effect"),
)

const Banner = () => {
  return (
    <div className="header-wrapper" id="home">
      <section className="hero is-fullheight" id="hero">
        <NavbarMobile />
        <Navbar />
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-full img-bg has-text-right">
                <h1 className="title">👋 &nbsp;
                  <span className="border-0" style={{ width: "max-content" }} contentEditable="true" spellCheck="false">I'm Alex Reis</span>
                </h1>
                <h1 className="subtitle profession">
                  <LoadableTypewriter />
                </h1>
                <div className="columns">
                  <div className="column" />
                  <div className="column">
                    <div className="ml-6 has-margin-top-4">
                      a backend software engineer 👨‍💻, developing software solutions in sectors like politics,
                      automotive, travels and sports.
                      Spending time between Aveiro & Porto.
                    </div>
                    <div className="ml-6">
                      Backend Engineer @ <a className="has-text-black has-text-weight-bold"
                                            href="https://7egend.cr">7EGEND</a>.
                      Spend most of my time thinking about startups, developing, motorcycles and surfing.
                    </div>
                    <div className="mt-5">
                      <a className="has-text-black" target="_blank" href={Social.stackoverflow}><DiStackoverflow  size={24}/></a>
                      <a className="has-text-black" target="_blank" href={Social.github}><IconBrandGithub
                        size={36}
                        color="black"
                        stroke={1}
                        strokeLinejoin="miter"
                      /></a>
                      <a className="has-text-black" target="_blank" href={Social.twitter}><IconBrandTwitter
                        size={36}
                        color="black"
                        stroke={1}
                        strokeLinejoin="miter"
                      /></a>
                      <a className="has-text-black" target="_blank" href={Social.instagram}><IconBrandInstagram
                        size={36}
                        color="black"
                        stroke={1}
                        strokeLinejoin="miter"
                      /></a>
                      <a className="has-text-black" target="_blank" href={Social.facebook}><IconBrandFacebook
                        size={36}
                        color="black"
                        stroke={1}
                        strokeLinejoin="miter"
                      /></a>
                      <a className="has-text-black" target="_blank" href={Social.linkedin}><IconBrandLinkedin
                        size={36}
                        color="black"
                        stroke={1}
                        strokeLinejoin="miter"
                      /></a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 mb-6" />
                <div className="mt-6">
                  <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0" />
                    <path className="a2" d="M0 20 L30 52 L60 20" />
                    <path className="a3" d="M0 40 L30 72 L60 40" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
