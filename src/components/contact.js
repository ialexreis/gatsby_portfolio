import React from "react"
import styled from "styled-components"
import illustration from "../utils/img/300.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import {Link} from "gatsby"


const ContactWrapper = styled.div`
  margin-bottom:0px;
  box-shadow: 0px 0px 0px -1px rgba(0,0,0,0.23);
  background: linear-gradient(17deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
`

const IconLink = styled.a`
  width: 50px;
  height: 50px;
  border: 2px solid linear-gradient(17deg, #2a81de, #dbd1df, #3ad5d7, #3dc519);
  padding: 10px;
  font-size: 30px;
  border-radius: 40%;
  color: #43485c;
`

const Contact = () => {
  return (
    <ContactWrapper className="header-wrapper" id="contact">
      <section className="is-large" >
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-three-fifths is-offset-one-fifth landing-caption">
                <h1 className="title">Contact Me</h1>
                <h3>If you want to <span>talk</span>, you can <span>find me</span> at:</h3><br/><br/>
                <h2><Link to="mailto:alex.cst.reis@gmail.com">alex.cst.reis@gmail.com</Link></h2>
                <ul>
                  <li>
                    <IconLink target="_blank"  href="https://github.com/adevr"><FontAwesomeIcon icon={faGithub}/></IconLink>
                  </li>
                  <li>
                    <IconLink target="_blank"  href="https://www.linkedin.com/in/alexandre-reis-dev/"><FontAwesomeIcon icon={faLinkedin}/></IconLink>
                  </li>
                  <li>
                    <IconLink target="_blank" href="https://www.facebook.com/lexreis12"><FontAwesomeIcon icon={faFacebook}/></IconLink>
                  </li>
                  <li>
                    <IconLink target="_blank"  href="https://www.instagram.com/alexiscreis/"><FontAwesomeIcon icon={faInstagram}/></IconLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ContactWrapper>
  )
}

export default Contact