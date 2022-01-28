import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';




const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== `undefined`) {
        let heroHeight = document.getElementById("hero").offsetHeight
        let heroNavHeight = document.getElementById("nav-foot").offsetHeight
        const isScrolled = window.scrollY > (heroHeight - heroNavHeight)
        if (isScrolled !== scrolled) {
          setScrolled(!scrolled)
        }
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
                <Link to="/">About me</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/uses">Uses</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
