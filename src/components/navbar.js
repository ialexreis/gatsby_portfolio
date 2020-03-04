import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 1024
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
    <div class="hero-foot" data-active={scrolled}>
      <div class="hero-foot--wrapper">
        <div class="columns">
          <div class="column is-12 hero-menu-desktop has-text-centered">
            <ul>
              <li class="is-active">
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
