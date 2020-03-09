import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
  
    const handleScroll = () => {
      let heroHeight = document.getElementById("hero").offsetHeight
      let heroNavHeight = document.getElementById("nav-foot").offsetHeight
      const isScrolled = window.scrollY > (heroHeight - heroNavHeight)
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
    <div className="hero-foot" id="nav-foot" data-active={scrolled}>
      <div className="hero-foot--wrapper">
        <div className="columns">
          <div className="column is-12 hero-menu-desktop has-text-centered">
            <ul>
              <li className="is-active">
                <Link to="#">About Me</Link>
              </li>
              <li>
                <Link to="#">Projects</Link>
              </li>
              <li>
                <Link to="#">Uses</Link>
              </li>
              <li>
                <Link to="#">Stack</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
