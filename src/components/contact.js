import React from "react"
import Social from "../configs/social"
import { DiStackoverflow } from "react-icons/all"
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandGmail
} from "@tabler/icons"


const Contact = () => {
  return (
    <div className="header-wrapper" id="contact">
      <section className="is-large" >
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-three-fifths is-offset-one-fifth landing-caption">
                <h1 className="title">Contact Me</h1>
                <h3>If you want to reach out or hire me use:</h3>
                <div className="mt-5">
                  <a className="has-text-black" target="_blank" href="mailto:alex.cst.reis@gmail.com"><IconBrandGmail
                    size={36}
                    color="black"
                    stroke={1}
                    strokeLinejoin="miter"
                  /></a>
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
