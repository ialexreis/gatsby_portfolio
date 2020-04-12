import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faArrowAltCircleUp} from "@fortawesome/free-regular-svg-icons"
import React, { useEffect, useState } from "react"

const ScrollTop = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 50px;
  margin-bottom: 50px;
  border-radius: 50%;
  background: #43485c;
  color: #fff;
  z-index: 99;
  border: 0;
  width: 50px;
  height: 50px;
  font-size: 25px;
  cursor:pointer;
  visibility: hidden;
`


const ButtonTop = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let heroHeight = document.getElementById("hero").offsetHeight
      const isScrolled = window.scrollY >= heroHeight
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <ScrollTop data-active={scrolled} onClick={() => scrollTo('#home')} ><FontAwesomeIcon icon={faArrowAltCircleUp}/></ScrollTop>
  )
}

export default ButtonTop;