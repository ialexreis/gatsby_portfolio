import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowAltCircleLeft} from "@fortawesome/free-regular-svg-icons"

const Button = styled.a`
  position: absolute;
  top: 10%;
  left: 10%;
  border-radius: 30px;
  background: #FFF;
  padding: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
`


const BackButton = () => {
  return (
    <Button href="/"><FontAwesomeIcon className="icon-gold" icon={faArrowAltCircleLeft} />Back</Button>
  )
}

export default BackButton