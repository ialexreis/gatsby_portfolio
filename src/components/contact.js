import React from "react"
import styled from "styled-components"
import illustration from "../utils/img/300.png"
import { graphql, StaticQuery } from "gatsby"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons"
import {Link} from "gatsby"


const ContactWrapper = styled.div`
  box-shadow: 0px 0px 0px -1px rgba(0,0,0,0.23);
`

const IconLink = styled(Link)`
  border: 2px solid linear-gradient(17deg, #2a81de, #dbd1df, #3ad5d7, #3dc519);
  padding: 10px;
  font-size: 30px;
  border-radius: 40%;
`

const Contact = () => {
  return (
    <ContactWrapper className="header-wrapper" id="contact">
      <section className="is-large" >
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-7 img-bg">
                <figure className="image ">
                  <img src={illustration} alt="Description" />
                </figure>
              </div>
              <div className="column is-5 is-offset-1 landing-caption">
                <h1 className="title">Contact Me</h1>
                <h3>If you want to <span>talk</span>, you can <span>find me</span> at:</h3><br/><br/>
                <h2><Link to="mailto:alex.cst.reis@gmail.com">alex.cst.reis@gmail.com</Link></h2>
                <ul>
                  <li>
                    <IconLink to="https://github.com/adevr"><FontAwesomeIcon icon={faGithub}/></IconLink>
                  </li>
                  <li>
                    <IconLink to="https://www.facebook.com/lexreis12"><FontAwesomeIcon icon={faFacebook}/></IconLink>
                  </li>
                  <li>
                    <IconLink to="https://www.linkedin.com/in/alexandre-reis-dev/"><FontAwesomeIcon icon={faLinkedin}/></IconLink>
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